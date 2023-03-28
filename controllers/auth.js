//models
const {userModel} = require('../models');

//handlers
const { encrypt, compare } =require('../utils/handlePassword')
const {signToken, verifyToken} = require('../utils/handleJwt');
const handleHttpError= require('../utils/handleError');

//validators
const { matchedData } = require('express-validator');


const registerController = async(req, res) => {
    try {
        req = matchedData(req);
        const password =  await encrypt(req.password); //password encrypted
        const body = {...req, password} //spread al req y añadimos el password nuevo encryption
        const dataUser = await userModel.create(body); //creamos el usuario en la base de datos
        dataUser.set('password', undefined, {strict:false}) //para que el password no se muestre en el response

        const data = {
            token: await signToken(dataUser),
            user: dataUser
        }
        
        res.send({data});
    } catch (error) {
        console.log(error)
        handleHttpError(res, 'ERROR EN EL REGISTER CONTROLLER')
    }
}

/**
 * Este es el controller de login que recibira el email y la contraseña para poder loguear a la contraseña
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async(req, res) => {
    try {
        req= matchedData(req);
        const user = await userModel.findOne({email:req.email})// para que tambien nos traiga el password solo en esta ocasion
        //.select('password name role _id'); QUITAMOS DE AQUI EL SELECT
        if(!user) {
            handleHttpError(res, 'USER DOES NOT EXIST', 404)
            return;
        }
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if(!check){
            handleHttpError(res, 'PASSWORD_INVALID', 401)
            return;
        }
        user.set('password', undefined, {strict:false})
        const data={
            token: await signToken(user),
            user
        }
        res.send({data});

    } catch (error) {
        console.log(error)
        handleHttpError(res, 'ERROR EN EL LOGIN CONTROLLER')
    }
};

module.exports = {registerController,loginController}