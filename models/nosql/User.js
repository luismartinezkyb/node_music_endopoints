const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        age:{
            type: Number,
        },
        email:{
            type: String,
            unique: true,
        },
        password:{
            type: String,
            select:false,
        },
        role: {
            type: ['admin', 'user'],
            default: 'user'
        }
    },{
        timestamps: true,//TOODO CREATEAT; UPDATEAT
        versionKey: false, //TO AVOID THE v0 in every insert
    }
);
UserSchema.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('User', UserSchema);