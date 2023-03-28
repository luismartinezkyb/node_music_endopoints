const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');
const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    check('mediaid').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next)
    
];

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next)//we need this cb because we wil throw an error if it fails
    
];

module.exports = { validatorCreateItem, validatorGetItem }