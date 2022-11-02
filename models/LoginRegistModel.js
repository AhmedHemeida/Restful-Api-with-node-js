const mongoose =require("mongoose") ;
const config = require ("config") ;
const jwt = require("jsonwebtoken") ;
const valid = require("validator") ;
const RegistSchema = new mongoose.Schema({
    name:{
        type : String ,
       required :true 

    } ,
    email :{
        type : String  ,
        unique : true ,
        validate : {
            validator :(val)=>{
                return valid.isEmail(val) ;
            }
        } ,
        message : 'Not Valid Email...'
    } ,

    password : {
        type : String ,
        required :true 
    } ,
    isAdmin : {
        type :Boolean 
    }
}) ;

RegistSchema.method( "genAuthToken" , function (){

    const token = jwt.sign({usrid:this._id , adminRole : this.isAdmin
    } , config.get("jwtsecret") ) ;
    return token ;
});

const usr = mongoose.model("user" ,RegistSchema) ;
module.exports = usr ;
