SELECT usersparties.characterchoice, usersparties.charactername, users.username 
FROM usersparties 
INNER JOIN users ON usersparties.userid = users.userid
WHERE partyid = $1;