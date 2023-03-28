const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TrackSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        
        album:{
            type: String,
            
        },
        cover:{
            type: String,
            validate:{
                validator: (req)=>{
                    return true;
                },
                message: 'ERROR_URL'
            }
        },
        artist: {
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String,
            },
        },
        duration:{
            start: {
                type:Number
            },
            end:{ 
                type:Number
            }
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
        
    },{
        timestamps: true,//TOODO CREATEAT; UPDATEAT
        versionKey: false, //TO AVOID THE v0 in every insert
    }
);

/**
 * Implementar metodo propio para la relacion con el storage
 * 
 */

TrackSchema.statics.findAllData = function(name){
    const joinData = this.aggregate([
        {
            $lookup: {
                from: "storages", 
                localField: "mediaId",
                foreignField: "_id",
                as: "audio"
            },
        },
        {
            $unwind:"$audio"//EL METODO UNWIND SOLO REGRESA EL OBJECTO
        }
        
    ])
    return joinData;
}

/**
 * para recuperar solo uno
 * 
 */
TrackSchema.statics.findOneData = function(id){
    const joinData = this.aggregate([
        
        {
            $match:{
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "storages", 
                localField: "mediaId",
                foreignField: "_id",
                as: "audio"
            },
        },
        {
            $unwind:"$audio"//EL METODO UNWIND SOLO REGRESA EL OBJECTO
        }
        
    ])
    return joinData;
}

TrackSchema.plugin(mongooseDelete, {overrideMethods: 'all'});

module.exports = mongoose.model('Track', TrackSchema);