module.exports = {
    editUsername: async (req, res) => {
        const db = req.app.get('db')
        const {content} = req.body
        const {userid} = req.params
        await db.edit_username([content, userid])


        res.status(200).send(req.session.user)
    }


    
}