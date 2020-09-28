require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive')
const authCtrl = require('./controllers/authController');


const app = express()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
    })
)


//endpoints.... 
//authendpoints
app.post('/auth/register', authCtrl.register)







massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false } 
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database is working right now')
    app.listen(SERVER_PORT, () => console.log(`Running dungeon in door ${SERVER_PORT}`))
}).catch(error => console.log('massive not functioning right'))