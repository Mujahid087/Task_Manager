import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import dbConnection from "./utils/index.js"
import { errorHandler,routeNotFound } from "./middlewares/errorMiddleware.js"
import routes from "./routes/index.js"

dotenv.config()

dbConnection()

const PORT = process.env.PORT || 5000

const app=express()

app.use(cors({
    origin:['http://localhost:3000','http://localhost:3001'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
// app.use(cors({
//     origin: (origin, callback) => {
//         const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
//         const excludedOrigins = ['http://example.com']; // Sites you want to exclude
        
//         if (allowedOrigins.includes(origin) && !excludedOrigins.includes(origin)) {
//             callback(null, true); // Allow the request
//         } else {
//             callback(new Error('Not allowed by CORS'), false); // Deny the request
//         }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }));


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api",routes)

app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' })
})

app.use(routeNotFound)
app.use(errorHandler)


app.listen(PORT,()=>console.log(`server listening on ${PORT}`))



    
