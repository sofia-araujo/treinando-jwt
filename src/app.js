import express from "express"
import cors from "cors"
const app = express()

import conn from "./config/conn.js"
import user from "./models/userModel.js"
import route from "./routes/userRouter.js"

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



conn.sync().then().catch((error)=> console.log(error)) // obrigatório !!

app.use('/test', route)

export default app