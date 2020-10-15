const { default: userEvent } = require("@testing-library/user-event")

module.exports = {
    reset: async (req, res) =>{
    const db = req.app.get('db')
    const {token} = req.body
    console.log('db', req.body)
    const [existingUser] = await db.check_token([token])
    if(!existingUser) {
        console.log('password reset link is invalid or has expired')
        res.json('password reset link is invalid or has expired')
    } else{
        res.status(200).send({
            email: existingUser.email,
            message: 'password reset link a-ok',
        })
    }
    }
}