SELECT usersparties.characterchoice, usersparties.charactername, users.username, usersparties.id 
FROM usersparties 
INNER JOIN users ON usersparties.userid = users.userid
WHERE partyid = $1;