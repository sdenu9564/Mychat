import express from "express";
import connection from "./database/db.js";
import route from "./Router/route.js";
import cors from "cors";
import bosyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bosyParser.json({extended : true}));
app.use(bosyParser.urlencoded({extended : true}))
app.use('/',route);

const PORT = 8000;
app.listen(PORT,async ()=>{
    await connection();
    console.log(`server is running on port:${PORT}`)
})