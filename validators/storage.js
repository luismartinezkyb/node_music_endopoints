const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next)//we need this cb because we wil throw an error if it fails
    
];
// WE CAN USE .isMongoId() at the end of the check if we are using mongoDB
module.exports = { validatorGetItem }