const express = require('express')

const database = require('./database')

const app = express()
const port = 3000


app.get('/playlists', (request, response) => {
  
  const a = [{'teste':1}];
  response.json(a)
})

app.listen(port, () => {
  console.log(`App listening...`)
})