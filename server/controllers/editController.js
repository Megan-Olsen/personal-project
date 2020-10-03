module.exports = {
    editUsername: async (req, res) => {
        const db = req.app.get('db')
        const {content} = req.body
        const {userid} = req.params
        const user = await db.edit_username([content, userid])

        req.session.user = user

        res.status(200).send(req.session.user)
    }


    
}