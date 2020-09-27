INSERT INTO users (username, email, password)
VALUES ($1, $2, $3)
returning id, username, email;