module.exports = {
    newChar:  async (req, res) => {
        const db = req.app.get('db')

        const { userid, partyid, characterchoice, charactername } = req.body

        await db.create_character([userid, partyid, characterchoice, charactername])

        res.sendStatus(200)
    },
    partyChar: async (req, res) => {
        const db = req.app.get('db')

        const {partyid} = req.body

        const characters = await db.party_characters([partyid])
        

        res.status(200).send(characters)
    },

    userChar: async (req, res) => {
        const db = req.app.get('db')

        const {userid} = req.body

        const characters = await db.user_characters([userid])

        res.status(200).send(characters)
    }


}