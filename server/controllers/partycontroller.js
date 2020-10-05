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
    }

}