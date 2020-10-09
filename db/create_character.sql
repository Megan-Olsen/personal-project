INSERT INTO usersparties (userid, partyid, characterchoice, charactername)
VALUES ($1, $2, $3, $4)
returning characterchoice, charactername, id;