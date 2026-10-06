import express from "express"
import { getPois, createPoi } from "../controller/PoiController.js"

const PoiRouter = express.Router()

PoiRouter.get('/',getPois)
PoiRouter.post('/',createPoi)

PoiRouter.get('/', (req, res) => {
    console.log('GET')
    res.status(200).json({ message: 'GET ok' })
})

PoiRouter.post('/', (req, res) => {
    console.log('POST')
    res.status(201).json({ message: 'POST ok' })
})

export default PoiRouter