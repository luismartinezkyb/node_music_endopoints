const {IncomingWebhook} = require('@slack/webhook');
const webHook =  new IncomingWebhook(process.env.SLACK_WEBHOOK) //rediseñamos y 
const loggerStream = {
    write: message=>{
        webHook.send({
            text:message
        })
        console.log("CAPTURAR EL ERROR", message)
    }
};

module.exports = loggerStream;