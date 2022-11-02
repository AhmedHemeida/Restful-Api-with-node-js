const express = require ("express") ;
const router = express.Router() ;
const regValidator =require("../middlewares/registMiddleware") ;
const User =require("../models/LoginRegistModel") ;
const bcrypt = require ("bcrypt") ;


//regstration

router.post("/regist" ,regValidator , async(req,res)=> {

    try {
  let usr = await User.findOne( { email : req.body.email }).exec() ;
  if(usr) {
    return res.status(400).send("user already exist..") ;
  }

    let salt = await bcrypt.genSalt(10) ;
    let hashedPassword = await bcrypt.hash(req.body.password , salt) ;
    usr = new User({
        email : req.body.email ,
        name : req.body.name ,
        password : hashedPassword 
    }) ;

     await usr.save() ;

        const token = usr.genAuthToken();
        res.header("x-auth-token",token) ;
   
      res.status(200).send("Registration Done..") ;

    }
    catch (err){
        console.log(err) ;
    }
}) ;



module.exports=router ;