const mongoose = require('mongoose');

const dbConnection = ()=>{
    const DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
    }).then(db => console.log('Db is connected'))
        .catch(err => console.error(err));
    
}


module.exports= dbConnection();