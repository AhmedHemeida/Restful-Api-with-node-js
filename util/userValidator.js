const Ajv = require("ajv") ;
const ajv = new Ajv() ;


const schema = {

    type : "object" ,
  
    properties : {
  
      fn : {
  
        type : "string" ,
        //pattern : "^[A-Z][a-z]*$" ,
      } ,
      ln : {
  
        type : "string" ,
        //pattern : "^[A-Z][a-z]*$" ,
      } ,
  
      dept : {
          type : "string" ,
         // enum : ["cs" , "is" , "it"] ,
      } ,
  
      id :{ 
        type : "integer"
      }
    } ,
      
   // required : ["fn" ,"ln"] ,
   
  
  } ;


module.exports=ajv.compile(schema) ;