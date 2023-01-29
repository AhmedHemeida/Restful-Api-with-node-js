const validator=require("../util/userValidator") ;
const User=require("../models/userModel") ;




const getAll=(req ,res)=>{
    res.json(User.fetchAll()) ;
  } ;

const getById= (req ,res)=>{

    let id =req.params.id ;
    const Usr =user.find((val,ind,arr)=>{
      return val.id==id ;
    });
    
    if(Usr){
    res.json(Usr) ;
    }
    else{
      res.send("Note found") ;
    }
  } ;


const creat= (req ,res)=>{

    let valid =validator(req.body) ;
  
    if(valid) {
        let usr=new User(req.body) ;
        usr.saveUser() ;

    res.json(req.body) ;
    }
    else{
      res.status(403).send("Bayez..!") ;
    }
  } ;


const update=(req,res)=>{

    let idx=user.findIndex((val)=>{
      return val.id==req.params.id
    }) ;
    if(idx != -1){
      for(i in req.body)
      {
        user[idx][i]=req.body[i] ;
      }
      res.send("the user is updated..") ;
      res.json(user[idx]) ;
    }else{
      res.send("the user not found..!") ;
    }
  
  } ;

const deleteUsr =(req,res)=>{
    let idx=user.findIndex((val)=>{
      return val.id==req.params.id
    }) ;
    if(idx != -1){
      let delusr=user.splice(idx,1) ;
      res.send("the user deleted..") ;
    }
    else{
      res.send("the user not found..!") ;
    }
  } ;


module.exports= { getAll , getById , creat , update , deleteUsr} ;