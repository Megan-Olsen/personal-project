module.exports = {
    editUsername: async (req, res) => {
        const db = req.app.get('db')
        const {username, userid} = req.body
        const [newUser] = await db.edit_username([username, userid])

        req.session.user = newUser

        res.status(200).send(req.session.user)
    },
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
    },
    editEmail: async (req, res) => {
        const db = req.app.get('db')
        const {email, userid} = req.body
        const [newUser] = await db.edit_email([email, userid])

        req.session.user = newUser

        res.status(200).send(req.session.user)
    }



}  