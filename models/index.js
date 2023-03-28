const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = (ENGINE_DB === 'nosql') ? '/nosql' :'/sql';

const models ={
    userModel: require(`.${pathModels}/User`),
    trackModel: require(`.${pathModels}/Track`),
    storageModel: require(`.${pathModels}/Storage`),
    
}

module.exports  = models;