import bcrypt from 'bcrypt';

module.exports = app => {
    const db = req.app.get('db')
    app.put('/updatePasswordViaEmail', (req, res, next) => {
        email = req.body.email
        const [user] = db.check_user([email])
    }).then(user => {
        if (user){
            console.log('user exists in db');

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt).then(
                db.edit_pass([hash, email]).then(() => {
                    console.log('password updated');
                    res.status(200).send({message: 'password updated'});
                })
            )
        } else {
            console.log('no user exists in db to update');
            res.status(404).json('no users exists in db to update')
        }
    })
}