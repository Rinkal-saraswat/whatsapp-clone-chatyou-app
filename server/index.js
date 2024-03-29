 import express from 'express';
 import cors from 'cors';
 import bodyParser from 'body-parser';

 import Route from './routes/route.js';


 //const express=require('express');     also correct ...
import Connection from './database/db.js';
 const app=express();
  
 app.use(cors());
 app.use(bodyParser.json({extended:true}));
 app.use(bodyParser.urlencoded({extended:true}));
 app.use('/',Route);
 Connection();
 const PORT=8000;
  
 app.listen(PORT ,()=>console.log(`server is running successfully on PORT ${PORT}`)) 