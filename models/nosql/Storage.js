const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const StorageSchema = new mongoose.Schema(
    {
        url:{
            type: String,
        },
        
        filename:{
            type: String,
            unique: true,
        }
    },{
        timestamps: true,//TOODO CREATEAT; UPDATEAT
        versionKey: false, //TO AVOID THE v0 in every insert
    }
);
StorageSchema.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('Storage', StorageSchema);