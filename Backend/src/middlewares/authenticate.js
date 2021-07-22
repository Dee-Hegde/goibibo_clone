const jwt = require("jsonwebtoken");

const authenticate = (req,  res, next)=>{
    const temp_token = req.headers.authorization;
    console.log(temp_token);
    next();
}

module.exports = authenticate;
