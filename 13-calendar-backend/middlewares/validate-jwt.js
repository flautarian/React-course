const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJwt = (req, res, next) => {
    const token = req.header('x-token');
    if(!token)
    return res.status(401).json({
        ok: false,
        msg: 'no token found'
    });

    try{
        const {uid, name } =jwt.verify(token, process.env.SECRET_JTW_SED);
        req.uid = uid;
        req.name = name;
    }
    catch(e){
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }
    next();
}


module.exports = {
    validateJwt
};