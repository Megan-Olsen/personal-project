const { default: userEvent } = require("@testing-library/user-event")

module.exports = app => {
    const db = req.app.get('db')
    const [existingUser] = app.get('/reset', (req, res, next) => {
        db.check_token([resetToken])
    }).then( existingUser => {
    if(!existingUser) {
        console.log('password reset link is invalid or has expired')
        res.json('password reset link is invalid or has expired')
    } else{
        res.status(200).send({
            email: existingUser.email,
            message: 'password reset link a-ok',
        })
    }
    })
}