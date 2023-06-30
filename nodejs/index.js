// console.log("hello world ");
// console.log('hi');


// const http = require('http');

import http from "http";
// const gfName = require('./features');

import champakChacha ,{gfName1,gfName2} from "./features.js";
import fs from 'fs';
// import {gfName1,gfName2} from "./features.js";

import { lovePercent1,lovePercent } from "./func.js";
import path from "path";



console.log(path.dirname('dir/file/index.html'));
console.log(champakChacha);
console.table([lovePercent1(),typeof lovePercent1(),lovePercent(),typeof lovePercent()]);

// string type is generally is used when we want to implement changes to web page therefore here we will use function which returns string type 

// this home code is executed at last because it is async in nature 
// const home = fs.readFile("./index.html",()=>{
//     console.log("file read");
// })

// console.log(home);


     const home = fs.readFileSync('./index.html');
const server = http.createServer((req,res)=>{
       console.log(req.method);
    console.log('Request URL:', req.url);
     if(req.url === '/about'){
       
        res.end(`<h1>love percent is : ${lovePercent()}</h1>`);
     }else if(req.url === '/'){

        // fs.readFile("./index.html",(err,data)=>{
        //    console.log("file read");
        //    console.log(data);
        //     res.end(data);
            
        // })
        
           res.end('home');
      //   res.end(home);
     }else if(req.url === '/contact'){
        res.end('<h1>contact page</h1>');
     }else if(req.url === '/documents'){
        res.end('<h1>documents page</h1>');
     }else{
        res.end('no page found');
     }      
      
    
     

});

server.listen(5000,()=>{
  console.log('server is working');
  
});