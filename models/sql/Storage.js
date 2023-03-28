const {sequelize} = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Storage = sequelize.define(
    "storage", 
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename:{
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
)

module.exports = Storage;