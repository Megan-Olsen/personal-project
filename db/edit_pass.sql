UPDATE users
SET password = $1 
WHERE email = $2;
SELECT userid, username, email FROM users WHERE email = $2;