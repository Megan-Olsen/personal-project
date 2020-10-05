INSERT INTO party (partyname, scenarioid, achievementsid, citydeckid, roaddeckid)
VALUES ($1, $2, $3, $4, $5)
returning *;