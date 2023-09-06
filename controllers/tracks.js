const { matchedData } = require('express-validator');
const {trackModel} = require('../models')
const handleHttpError = require('../utils/handleError');



const getItems= async(req, res)=>{
    try {
        const {user} = req;
        const data = await trackModel.findAllData({});
        res.send({data, user});
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR EN GET ITEMS")
    }
}
const getItem= async(req, res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await trackModel.findOneData(id);
        res.send({data});// we need this {} to send a POJO or passing it through a JSON.stringify()
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR GET ITEM") //estandarizamos el uso y manejo de erroes
    }
}
const createItem = async(req, res)=>{
    try {
        const body = matchedData(req);
        //const {body}= req; we dont need this anymore because we already initialized it with the matchedData instance
        const data = await trackModel.create(body);
        res.send({data});
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR EN INSERT ITEM") //estandarizamos el uso y manejo de erroes
    }
}
const updateItem = async(req, res)=>{
    try {
        const {id, ...body} = matchedData(req); //un objeto con id y el otro restante
        const data = await trackModel.findOneAndUpdate(id, body);
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR EN Update ITEM")
    }
}

const deleteItem = async(req, res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await trackModel.delete({_id:id});
        //we can send here some information like statuscode, message or something like that
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR DELETE ITEM") //estandarizamos el uso y manejo de erroes
    }
}

module.exports = {getItems, getItem, updateItem, createItem, deleteItem}