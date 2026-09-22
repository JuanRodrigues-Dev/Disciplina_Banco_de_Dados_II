import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

import { Client } from 'pg'
const client = await new Client({
  host: 'localhost',
  port: '5452',
  user: 'postgres',
  password: 'postgres',
  database: 'aula'
}
).connect()

app.get('/municipios/:codigo', async (req, res) => {
  const geojson = await client.query(
    'select ST_ASGeoJSON(geom) as geojson from municipios where id = $1', [req.params.codigo]
  )
  res.json(geojson.rows[0])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})