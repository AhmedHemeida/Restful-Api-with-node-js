const express = require("express");
const router = express.Router();
//const userController =require("../controllers/userController") ;
const userControllerDb =require("../controllers/userControllerDb") ;
const stdValidator= require("../middlewares/stdValidator") ;
const auth = require ("../middlewares/authMWpermession") ;





// Get All

router.get("/" ,userControllerDb.getAll )

// Get by id

router.get("/:id" , userControllerDb.getById) ;


// POST 

router.post("/post",stdValidator,auth ,userControllerDb.addusr) ;


// put

router.put("/:id" , userControllerDb.updateStd) ;

//delete

router.delete("/:id" , auth ,userControllerDb.DeleteStd ) ;


module.exports = router;
