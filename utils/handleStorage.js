const multer = require('multer');


/**
 * En este apartado podremos declarar con multer una instancia de un disco en donde utilizaremos el path de la carpeta
 * Storage para poder hacer uso de ese destino
 * 
 * Mientras que en la parte del filename debemos de declarara como es que cada archivo que llegue serà llamado y guardado en lar
 * ruta destino, añadiendo una fecha y una extensión del mismo archivo para sobrescribir el nombre de cada archivo
 */
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}'/../storage`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        //si se puede sobreescribir un archivo o si no se puede
        const ext = file.originalname.split('.').pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
});

const uploadMiddleware = multer({storage:storage}); //siempre usando el objeto completo para evitar mala documentación



module.exports = uploadMiddleware;