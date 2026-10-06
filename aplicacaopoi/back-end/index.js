import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.API_PORT || 3000

import PoiRouter from "./router/PoiRouter.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use('/pois', PoiRouter)


app.listen(port,()=>{
    console.log(`Server rodando na porta ${port}`)
})