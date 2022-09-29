const jwt = require('jsonwebtoken');

const generateJwt = (uid, name) => {
    return new Promise( (resolve, reject) => {
        const payload = { uid, name };
        jwt.sign( payload , process.env.SECRET_JTW_SED, {
            expiresIn: '2h'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject('Token not created by an error');
            }
            resolve(token);
        });
    });
}


module.exports = {
    generateJwt
};