UPDATE users 
SET username = $1
WHERE id = $2
returning userid, username, email;