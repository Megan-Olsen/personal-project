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

    },
    getScenarios: async (req, res) => {
        const db = req.app.get('db')
        const {scenarioid} = req.body
        const [currentScenarios] = await db.get_scenarios([scenarioid])
        if(!currentScenarios){ return res.status(404).send('Scenarios not found')}
        req.session.scenarios = currentScenarios
        console.log(req.session.scenarios)
        res.status(200).send(req.session.scenarios)
    },
    getAchievements: async (req, res) => {
        const db = req.app.get('db')
        const {achievementsid} = req.body
        const [currentAchievements] = await db.get_achievements([achievementsid])
        if(!currentAchievements){return res.status(404).send('Achievements not found')}
        req.session.achievements = currentAchievements
        res.status(200).send(req.session.achievements)
    },
    getCity: async (req, res) => {
            const db = req.app.get('db')
            const {citydeckid} = req.body
            const [currentCity] = await db.get_city([citydeckid])
            if(!currentCity){return res.status(404).send('City not found')}
            req.session.city = currentCity
            res.status(200).send(req.session.city)
    },
    getRoad: async (req, res) => {
        const db = req.app.get('db')
        const {roaddeckid} = req.body
        const [currentRoad] = await db.get_road([roaddeckid])
        if(!currentRoad){return res.status(404).send('Road not found')}
        req.session.road = currentRoad
        res.status(200).send(req.session.road)
    }
}