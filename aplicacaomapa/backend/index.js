import express from 'express'
const app = express()
const port = 3000

import { Client } from 'pg'
const client = await new Client().connect()
 
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