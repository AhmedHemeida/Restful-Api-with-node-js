const express = require ("express") ;
const router = express.Router() ;
const logValidator =require("../middlewares/loginMiddleware") ;
const User =require("../models/LoginRegistModel") ;
const bcrypt = require ("bcrypt") ;
const config = require ("config") ;

router.post("/login" ,logValidator, async(req,res)=>{

    
         try {

                let usr = await User.findOne( { email : req.body.email }).exec() ; 
                if(!usr) return res.status(400).send("inValid Email or password..") ;

                const validpswrd = await bcrypt.compare(req.body.password , usr.password) ;
                if(!validpswrd) return res.status(400).send("inValid Email or password..") ;

               if(!config.get("jwtsecret")) return res.status(500).send("Request cant be fullfiled")
                
                const token = usr.genAuthToken() ;

               res.header("x-auth-token",token) ;
                res.status(200).send("Logged in sucsess..") ;
                        
          }
          catch(err){
                console.log(err) ;
          }
    
    
    
})










module.exports=router ;