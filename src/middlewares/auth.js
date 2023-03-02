const auth = (req, res, next) => {
    if(req.session.admin){
        next()
    }else{
        res.send('No sos admin loco')
    }
}

module.exports = { auth };