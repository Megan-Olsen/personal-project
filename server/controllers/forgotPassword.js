const crypto =  require('crypto');
const creds = require('../config/config');

const nodemailer = require('nodemailer');
module.exports =  {
    forgotPass: async (req, res) => {
        const db = req.app.get('db')
        const email = req.body.email
        if (req.body.email === '') {
            res.status(400).send('email required')
        }
        console.error(req.body.email);
        const [existingUser] = await db.check_user([email])

        if(!existingUser) {
            console.error('email not in database')
            return res.status(403).send('email not in database')
        } else {
            const token = crypto.randomBytes(20).toString('hex')
            db.token([token, req.body.email])
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: creds.USER,
                    pass: creds.PASS
                }
            })

            const mailOptions = {
                from: 'gloomhaven.codex@gmail.com',
                to: `${existingUser.email}`,
                subject:  'Link To Reset Password',
                text: 
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account. \n \n' 
                    + 'Please click on the following link, or paste this into your browser to complete the process withing one hour of receiving it: \n\n'
                    +`www.gloomhavencodex.com/reset/?${token} \n\n`
                    +'If you did not request this, please ignore this email and your password will remain unchanged. \n'
            };

            console.log('sending mail');

            transporter.sendMail(mailOptions, (err, response) => {
                if (err){
                    console.error('there was an error: ', err)
                } else {
                    console.log('here is the res: ', response);
                    res.status(200).json('recovery email sent');
                }
            })
        }
    }
}