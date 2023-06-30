// import nodemon is not added in dependencies cause it is installed globally 

import express from "express";
import path from "path";
import mongoose from "mongoose";

// const server = express();

// server.listen(5000,()=>{
//     console.log('server is working');
// })

// rather than writing server variable we name it as app just as industry practice 


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend",
}).then(()=>{console.log("mongoDB connected")}).catch(e=>console.log(e));


const messageSchema = new mongoose.Schema({
    name:String,
    email:String,
}); 

const Messge = mongoose.model("Message",messageSchema);

//array ko as a data base use kar rahe hai
// const users = [];
// app.use(express.static('public'));

// or 

app.use(express.static(path.join(path.resolve(),"/public")));

app.use(express.urlencoded({extended: true}));
//setting up a view engine 
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    // res.sendStatus(404);

    // res.json({
    //     success:true,
    //     products:[],
    // });




    // res.status(400).send("meri marzi");
    // console.log(path.resolve());
    // const pathLocation = path.resolve();
    // const pathMain = path.join(pathLocation,"./index.html");
    // console.log(pathMain);

    // res.sendFile(pathMain);
    // path should be absolute , yani pura path hona chahiye 
   // hum isme direct absolute path nhi dal sakte , nahi fs , karke ek function se dal sakte hai , iske liye hamein path ka use karna hoga 
   
    res.render("index",{name:"trish"});
   

})

app.get("/success",(req,res)=>{
    res.render("success",{name:"dhatrish"});
})
app.post("/userData",async (req,res)=>{
    // console.log(req.body.name); 
    // users.push({
    //     username : req.body.name,
    //     email:req.body.email
    // })

    const messageData = {
        username : req.body.name,
        email:req.body.email
    };
    console.log(messageData);
  // or can directly use  req.body
  await Messge.create({name:messageData.username,email:messageData.email});


  res.render("success",{name:messageData.username});
    // res.redirect("/success");

})

// app.get("/add",async (req,res)=>{
    
//    await Messge.create({name:"dhatrish123",email:"sample11@gmail.com"})
// //    .then(()=>{
//         res.send("nice");
//     // }).catch(c=>console.log(c))

    
// });

app.get("/data",(req,res)=>{
    res.json(users);
})
app.listen('5000',()=>{
    console.log('server is working');
})