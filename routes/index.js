const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

const removeExtension = (fileName)=>{
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    
    const name = removeExtension(file);         //remueve la extension para obtener solo el nombre
    if(name!=='index'){
        
        router.use(`/${name}`, require(`./${file}`)); //inicializa todas las rutas de una, en vez de tener que hacerlo en cada file
    }
});

module.exports = router;