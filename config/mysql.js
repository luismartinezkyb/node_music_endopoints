const { Sequelize}= require('sequelize');

// TENDREMOS QUE DEBINIR COMO EL POOL DE NUESTRO SEQUELIZE

const database = process.env.MYSQL_DB;
const username  = process.env.MYSQL_USER;
const password  = process.env.MYSQL_PASSWD;
const host  = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database, 
    username,
    password, 
    {
        host,
        dialect:'postgres'
    }
);

const dbConnectPostgres = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("CONECCION POSTGRESQL CORRECTA")
    } catch (error) {  
        console.log("ERROR DE LA CONNECTION EN POSTGRESQL", error)
    }
}


module.exports = {sequelize, dbConnectPostgres}