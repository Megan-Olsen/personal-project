require('dotenv').config();
const path = require('path')
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const editCtrl = require('./controllers/editController');
const verifyUser = require('./middlewares/verifyUser');
const partCtrl = require('./controllers/partycontroller');
const charCtrl = require('./controllers/charController');
const forCtrl = require('./controllers/forgotPassword');
const resPass = require('./controllers/resetPassword');
const up = require('./controllers/updatePasswordViaEmail');
var nodemailer = require('nodemailer');
const creds = require('./config/config');


const app = express();




const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
})
)


//endpoints.... 
//authendpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.post('/api/auth/logout', authCtrl.logout)
app.get('/api/auth/user', authCtrl.getUser)
app.delete('/api/auth/:userid', verifyUser, authCtrl.deleteAcc)
app.delete('/api/char/:id', verifyUser, charCtrl.deleteChar)

//edits user endpoint?
app.put('/api/user/username', verifyUser, editCtrl.editUsername)
app.put('/api/user/email', verifyUser, editCtrl.editEmail)
//newparty endpoint
app.post('/api/newparty', verifyUser, partCtrl.newParty)
app.get('/api/party/get', verifyUser, partCtrl.getParty)
app.post('/api/party/find', verifyUser, partCtrl.findParty)
app.post('/api/scenarios', verifyUser, partCtrl.getScenarios)
app.post('/api/achievements', verifyUser, partCtrl.getAchievements)
app.post('/api/city', verifyUser, partCtrl.getCity)
app.post('/api/road', verifyUser, partCtrl.getRoad)
app.post('/api/newcharacter', verifyUser, charCtrl.newChar)
app.post('/api/partychar', charCtrl.partyChar)
app.post('/api/userchar', charCtrl.userChar)
app.post('/api/forgotPassword', forCtrl.forgotPass)
app.post('/api/reset', resPass.reset)
app.put('/updatePasswordViaEmail', up.updatePass)




massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false } 
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is working right now')
}).catch(error => console.log('massive not functioning right', error))

app.listen(SERVER_PORT, () => console.log(`Running dungeon in door ${SERVER_PORT}`))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post('/contact/submit', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    var mail = {
        from: name,
        to: 'GLOOMHAVEN.CODEX@GMAIL.COM',   
        subject: 'New Message From Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err,data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})