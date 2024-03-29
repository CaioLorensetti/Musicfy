const express = require('express')
const database = require('./database')
const json2csv = require('json2csv')

const app = express()
const port = 3000


app.get('/playlists_csv', (request, response) => {

  console.log(' Musicfy playlists_csv')

  database.getAllPlaylists(function (data) {
    const fields = Object.keys(data[0])
    const parser = new json2csv.Parser({fields})
    const csv = parser.parse(data)
    response.attachment('playlists.csv')
    response.status(200).send(csv)
  })

})

app.get('/playlists', (request, response) => {

  console.log(' Musicfy playlists')

  database.getAllPlaylists(function (data) {
    response.json(data)
  })

})

app.listen(port, () => {
  console.log(`App listening...`)
})