const {sequelize} = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Track = sequelize.define(
    "track",
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        album:{
            type: DataTypes.STRING,
        },
        cover:{
            type: DataTypes.STRING,
        },
        artist_name:{
            type: DataTypes.STRING,
        },
        artist_nickname:{
            type: DataTypes.STRING,
        },
        artist_nationality:{
            type: DataTypes.STRING,
        },
        duration_start:{
            type: DataTypes.INTEGER,
        },
        duration_end:{
            type: DataTypes.INTEGER,
        },
        mediaid:{ 
            type: DataTypes.STRING,
        },
        
    },
    {
        timestamps:false
    }
)

module.exports = Track;