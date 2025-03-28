import cors from "cors"
import express from "express"
//to access and set cookies in user's browser
import cookieParser from "cookie-parser"


const app= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }
