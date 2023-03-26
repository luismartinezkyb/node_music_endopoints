const express = require('express');
const router = express.Router();


//validators or middlewares
const {validatorLogin, validatorRegister} = require('../validators/auth')
//controllers loginController
const {registerController, loginController} = require('../controllers/auth');


/**
 * Crear item
 */
router.post('/register', validatorRegister,registerController);
router.post('/login', validatorLogin, loginController);




module.exports = router;