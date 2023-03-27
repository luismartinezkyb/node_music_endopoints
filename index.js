//IMPORTS FROM LIBRARIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const morganBody = require('morgan-body');

//INITIALIZATIONS
require('./config/database');
const loggerStream = require('./utils/handleLogger');
//SETINGS

const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));//i can use express.static to show elemenets from some folders like files, etc...


// TO SEND DATA WHEN THE STATUS CODE IS MORE THAN 400

// morganBody(app,{
//     noColors:true,
//     stream: loggerStream,
//     skip: (req, res)=>{
//         return res.statusCode < 400
//     }
// })

///ROUTES
app.use('/api', require('./routes/'));

///GLOBAL VARIABLES


//LISTENING

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});


