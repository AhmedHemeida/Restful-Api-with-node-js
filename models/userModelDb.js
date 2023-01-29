const mongoose = require ('mongoose') ;


const myschema =new mongoose.Schema({
    fn : String ,
    ln : String ,
    dept : String ,
    id : Number 

}) ;

const Student = mongoose.model("std" , myschema) ;
module.exports=Student ;