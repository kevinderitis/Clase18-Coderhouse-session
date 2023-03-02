const { Router } = require('express');
const userRouter = Router();
const { auth } = require('../middlewares/auth')

userRouter.get('/login' , (req, res) => {
    if(req.session.counter){
        req.session.counter++
        res.send(`Visitaste el sitio ${req.session.counter} veces.`)
    }else{
        let nombre = req.query.nombre ? req.query.nombre : '';
        req.session.counter = 1;
        req.session.name = nombre;
        res.send(`Bienvenido ${req.session.name} al sitio.`)
    }
})

userRouter.get('/loginAdmin', auth ,(req, res) => {
    if(req.session.counter){
        req.session.counter++
        res.send(`Visitaste el sitio ${req.session.counter} veces.`)
    }else{
        let nombre = req.query.nombre ? req.query.nombre : '';
        req.session.counter = 1;
        req.session.name = nombre;
        req.session.admin = true;
        res.send(`Bienvenido ${req.session.name} al sitio.`)
    }
})

userRouter.get('/privado', auth, (req, res) => {
    res.send('Esto es privado')
})

module.exports = userRouter;