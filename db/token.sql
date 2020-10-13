UPDATE users
SET token = $1
WHERE email = $2;
SELECT userid, username, email, token FROM users WHERE email = $2;