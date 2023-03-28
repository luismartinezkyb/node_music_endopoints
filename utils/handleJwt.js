const jwt  = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require('./handlePropertiesEngine');

const propertiesKey = getProperties();


const signToken = async (user) => {
    const sign = jwt.sign(
        {
            [propertiesKey.id]:user[propertiesKey.id],
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );
    return sign;
}

/**
 * DEBES DE PASAR EL TOKEN DE SESION DEL JWT
 * @param {*} token 
 * @returns 
 */
const verifyToken = async(token)=>{
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = {signToken, verifyToken};