const handleHttpError = require('../utils/handleError')
const checkRolMiddleware = (rol) => (req, res, next)=>{
    try {
        const {user} = req;
        const rolesByUser = user.role;
        const checkValueRole = rol.some((rolSingle)=>rolesByUser.includes(rolSingle))

        if(!checkValueRole){
            handleHttpError(res, "ERROR_USER_NOT_PERMISSION", 403)
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res, "ERROR_PERMISSION_DENIED", 403)
        
    }
}


module.exports = checkRolMiddleware;