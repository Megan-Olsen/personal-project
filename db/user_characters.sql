SELECT usersparties.characterchoice, usersparties.charactername, usersparties.partyid, party.partyname 
FROM usersparties 
INNER JOIN party ON usersparties.partyid = party.partyid
WHERE userid = $1;