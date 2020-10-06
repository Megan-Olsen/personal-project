module.exports = {
    newParty: async (req, res) => {
        const db = req.app.get('db')

        const { partyName } = req.body

        const [scenarioid] = await db.create_scenarios()

        const [achievementsid] =  await db.create_achievements()

        const [citydeckid] = await db.create_city()

        const [roaddeckid] = await db.create_road()

        const [newParty] = await db.create_party([partyName, scenarioid.scenarioid, achievementsid.achievementsid, citydeckid.citydeckid, roaddeckid.roaddeckid])

        req.session.party = newParty

        res.status(200).send(req.session.party)
    },
    findParty: async (req, res) => {
        const db = req.app.get('db')
        const {partyid} = req.body
        const [currentParty] = await db.check_party([partyid])
        if(!currentParty) {
            return res.status(404).send('Party not found')
        }

        req.session.party = currentParty

        res.status(200).send(req.session.party)

    },
    getParty: async (req, res) => {
        if (req.session.party){
            res.status(200).send(req.session.party)
        } else {
            res.status(404).send('No party on session')
        }

    }

}