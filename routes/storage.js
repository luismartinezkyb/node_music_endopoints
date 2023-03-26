const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, deleteItem} = require('../controllers/storage');

//middleware
const uploadMiddleware = require('../utils/handleStorage')

//validators
const {validatorGetItem} = require('../validators/tracks')


router.get('/', getItems);
router.post('/', uploadMiddleware.single('myfile'), createItem);
router.get('/:id',validatorGetItem,  getItem);
router.delete('/:id', validatorGetItem, deleteItem);


module.exports = router;