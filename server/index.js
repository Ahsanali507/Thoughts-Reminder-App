import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import postsRouter from "./routes/posts.js"

const app=express()

app.use('/posts',postsRouter)
app.use('/createPost',postsRouter)

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

const connection_url='mongodb+srv://ahsanali:Ahsn1234@cluster0.kntb4lw.mongodb.net/?retryWrites=true&w=majority'
const port=process.env.port||5000

mongoose.connect(connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(port,()=>console.log(`Server running on port ${port}`)))
.catch((error)=>console.log(error.message))

// mongoose.set('useFindAndModify',false)