const customHeader = (req, res, next) =>{
    try {
        const apiKey = req.headers.api_key;

        if(apiKey!=="luis_01"){
            res.status(403);
            res.send({error: "Invalid API Key"})
        }else{
            next();
        }
        
    } catch (error) {
        res.status(403)
        res.send({error: "Something happend in the curstom header"})
    }
}

module.exports = customHeader;