const express = require ("express") ;
const router = express.Router() ;
const Usr=require("../models/LoginRegistModel") ;
const auth=require("../middlewares/authMWpermession");
// set user to admin

router.put("/:id" , auth ,(req,res)=>{

    Usr.findByIdAndUpdate({_id:req.params.id } , {isAdmin:true}, function (err,data){

    if(!err){
        if(data) res.status(200).send("user is set to admin.") ;
        else res.status(400).send("user is not found..") ;


    }else{
        res.status(500).send("internal serve error..!") ;
    }
})


})








module.exports=router ;