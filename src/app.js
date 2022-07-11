const express = require('express')

const database = require('./database')

const app = express()
const port = 3000


app.get('/playlists', (request, response) => {

  database.getAllPlaylists(function (data) {
    response.json(data)  
  })

})

app.listen(port, () => {
  console.log(`App listening...`)
})