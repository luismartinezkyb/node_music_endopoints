//IMPORTS FROM LIBRARIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const morganBody = require('morgan-body');
//INITIALIZATIONS
require('./config/database');

//SETINGS

const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));//i can use express.static to show elemenets from some folders like files, etc...

const loggerStream = {
    write: message=>{
        console.log("CAPTURAR EL ERROR")
    }
};
morganBody(app,{
    noColors:true,
    stream: loggerStream
})

///ROUTES
app.use('/api', require('./routes/'));

///GLOBAL VARIABLES


//LISTENING

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});


