const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')
const {getItems, getItem, updateItem, createItem, deleteItem} = require('../controllers/tracks');
//middleware
const customHeader = require('../middlewares/customHeader');

/**
 * lista de items
 */
router.get('/', getItems);

/**
 * Crear item
 */
router.post('/', validatorCreateItem, createItem);

/**
 * Obtener solo un item
 */

router.get('/:id',validatorGetItem, getItem);
/**
 * Actualizar un item
 */
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);
/**
 * Eliminar un item
 */
router.delete('/:id', validatorGetItem, deleteItem);



module.exports = router;