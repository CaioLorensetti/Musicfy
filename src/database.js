const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'Chinook',
    user: 'chinook.musicfy', //Standard authentication type only for Chinook DB
    password: 'musicfy_1234'
})

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log(`MySql conectado com sucesso.`)
    }
})

connection.getAllPlaylists = (callback) => {
    var query = 
        `select
            p.PlaylistId,
            p.Name as 'Playlist Name',
            t.Name as 'Track Name',
            a.Title as 'Album Name',
            ar.Name as 'Artist Name',
            g.Name as 'Genre Name'
        from Playlist p
        join PlaylistTrack pt on pt.PlaylistId = p.PlaylistId
        join Track t on t.TrackId = pt.TrackId
        left join Album a on a.AlbumId = t.AlbumId
        left join Artist ar on ar.ArtistId = a.ArtistId
        left join Genre g on g.GenreId = t.GenreId`

    connection.query(query, function(error, data){
		if(error)
		{
			throw error; 
		}
		else
		{
			return callback(data);
		}
	})
}

module.exports = connection;