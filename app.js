const express =require("express") ;
const app = express() ;
const port=process.env.PORT||3000 ;
const router=require("./routes/users") ;
const registRouter =require("./routes/Regist") ;
const loginRouter = require ("./routes/login") ;
const adminRouter = require("./routes/admin") ;
const mongoose = require ("mongoose") ;
const bodyParser=require("body-parser") ;
const dotenv =require("dotenv") ;
dotenv.config();
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use("",router) ;
app.use("",registRouter);
app.use("" ,loginRouter) ;
app.use("/admin",adminRouter);
app.use(bodyParser.urlencoded({extended:false})) ;
app.use(bodyParser.json()) ;
mongoose.connect(process.env.Database_url ,{
    useNewUrlParser:true ,
  useUnifiedTopology:true ,
  useCreateIndex :true ,
  useFindAndModify:false  
} 

).then(()=>{
    console.log("Db Connect :)") ;
}).catch((err)=>{
    console.log("Erreor :(") ;
})








app.listen(port , ()=>{
  console.log(`server is listening at port ${port}`) ;
}) ;
