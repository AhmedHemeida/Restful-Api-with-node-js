const jwt = require ("jsonwebtoken") ;
const config = require("config") ;

module.exports = (req,res ,nxt)=>{

   const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Access Denied..") ;
    
    try
    {

            const decodedPayload= jwt.verify(token ,config.get("jwtsecret")) ;

            // check is admin or not
            
            if(!decodedPayload.adminRole) return res.status(401).send("access denied..") ;

            nxt () ;

    }
    catch (err){
        res.status(400).send("Invalid Token..") ;
    }
}