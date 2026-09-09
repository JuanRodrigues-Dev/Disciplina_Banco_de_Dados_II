import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3000

import { Client } from 'pg'
const client = await new Client({
    host:'localhost',
    port:'5452',
    user:'postgres',
    password:'postgres',
    database:'aula'
}
).connect()
 
try {
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
} catch (err) {
  console.error(err)
} finally {
  await client.end()
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})