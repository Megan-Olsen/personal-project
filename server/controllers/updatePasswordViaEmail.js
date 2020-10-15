const bcrypt = require('bcryptjs');

module.exports = {
    updatePass: async (req, res, next) => {
        const db = req.app.get('db')
        const email = req.body.email
        const [user] =  await db.check_user([email])
        if(!user){
            return res.status(404).json('no users exists in db to update')
        }
        
            console.log('user exists in db');

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt)
                
            await db.edit_pass([hash, email])
            console.log('password updated');
            res.status(200).send({message: 'password updated'});
                
            
        
    }
}