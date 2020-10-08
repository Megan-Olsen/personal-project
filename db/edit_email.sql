UPDATE users
SET email = $1
WHERE userid = $2;
SELECT userid, username, email FROM users WHERE userid = $2;