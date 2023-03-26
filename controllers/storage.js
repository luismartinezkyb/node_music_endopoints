const {storageModel} = require('../models')
const { matchedData } = require('express-validator');
const handleHttpError = require('../utils/handleError');
const fs = require('fs');
//ENV
const MEDIA_PATH = `${__dirname}/../storage`;
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems= async(req, res)=>{
    try {
        const data = await storageModel.find({});
        res.send({data});    
    } catch (error) {
        handleHttpError(res, "ERROR EN GET ITEMS STORAGE")
    }
    
}
const getItem = async(req, res)=>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById(id);
        res.send({data});
    } catch (error) {
        handleHttpError(res, "ERROR EN GET STORAGE BY ID")
    }
}
const createItem = async(req, res)=>{
    try {
        const {body, file}= req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        };
        const data = await storageModel.create(fileData);
        res.send({data});
        
    } catch (error) {
        handleHttpError(res, "ERROR EN CREATE STORAGE")
    }
    
}

const deleteItem = async(req, res)=>{
    try {
        
        req = matchedData(req);
        const {id} = req;
        const dataFile = await storageModel.findById(id);
        
        const {filename} = dataFile; //des estructuramos el filename del data y 
        const result = await storageModel.delete({_id:id});
        //await storageModel.deleteOne({_id:id});
        
        const filePath = `${MEDIA_PATH}/${filename}`;
        //SI ES QUE QUEREMOS BORRAR EL ARCHIVO, de lo contrario solo comentar la linea
        fs.unlinkSync(filePath)
        const data = {
            filePath,
            result
        }
        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR EN DELETED BY ID")
    }
}

module.exports = {getItems, getItem, createItem, deleteItem}