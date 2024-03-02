
// include express here
import express  from "express";
// inlude cors here
import cors from "cors"
// include cookie parser
import cookieParser from "cookie-parser";

const app=express();

// config pf cors
// use is used for middlewares and cofig
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({
    // limitation of json
    limit:"16kb"
}))

// sometimes u see - or % in url between two words 
// below is the config for that
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

// config cookie-parser
app.use(cookieParser())


export  { app };
