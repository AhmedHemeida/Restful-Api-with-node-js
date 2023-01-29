const Student=require("../models/userModelDb") ;


// creat student

const addusr =async (req ,res )=>{
    try {
 const usr = new Student({
    fn : req.body.fn ,
    ln : req.body.ln ,
    dept : req.body.dept ,
    id :req.body.id  

 }) ;

 
    const val = await usr.save() ;
    res.json(val) ;
 }
 
 catch(err){
    console.log(err) ;
} ;

}

// Get student By ID

let getById = async(req ,res)=>{
    let usr =await Student.findById(req.params.id) ;

    if(!usr){
        res.status(404).send("Not found..!") ;

    }else{
        res.send(usr) ;
    }
} ;

// Get All student

let getAll = async (req,res)=>{
    let std = await Student.find() ;
    res.send(std) ;
}

// Update student by id

let updateStd = async (req ,res )=>{

    let std = await Student.findOneAndUpdate(req.params.id , req.body , {returnOriginal :false }) ;

    if(!std){
        res.status(404).send("not found !") ;
        
    }

    else{
        res.send("studnet updated : )") ;
    }

};

// Delete student by id

let DeleteStd = async (req ,res )=>{
    let std = await Student.findByIdAndRemove(req.params.id) ;
    if(!std){
        res.status(404).send("not found !") ;
        
    }

    else{
        res.send("studnet Deleted : )") ;
    }
} ;

module.exports = {addusr , getById , getAll , updateStd , DeleteStd} ;