const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')
const {getItems, getItem, updateItem, createItem, deleteItem} = require('../controllers/tracks');
//middleware
const customHeader = require('../middlewares/customHeader');
const authMiddleware = require('../middlewares/session');
const checkRolMiddleware = require('../middlewares/role');

/**
 * lista de items
 */
router.get('/',authMiddleware, getItems);

/**
 * Crear item
 */
router.post('/',authMiddleware, validatorCreateItem, createItem); //  PARA OBTENER SOLO LOS DEL ROLE DE ADMINISTrADOR

//router.post('/',authMiddleware,  checkRolMiddleware(['user']), validatorCreateItem, createItem);// PARA PODER OBTENER LOS DEL ROLE USER

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