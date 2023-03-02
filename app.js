const express = require('express');
const session = require('express-session');
const app = express();
const userRouter = require('./src/routes/user')

app.use(session({
    secret: 'esteeselsecret',
    resave: false,
    saveUninitialized: false
}))

app.use('/user', userRouter)


const server = app.listen(8080, () =>  console.log('Server running'))
server.on('error', error => console.log(error))
