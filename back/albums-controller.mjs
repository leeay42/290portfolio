// Controllers for the Album Collection

import 'dotenv/config';
import express from 'express';
import * as albums from './albums-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/albums', (req,res) => { 
    albums.createAlbum(
        req.body.title, 
        req.body.artist, 
        req.body.releaseDate,
        req.body.numberOfSongs
        )
        .then(album => {
            res.status(201).json(album);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Failed to create album document.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/albums', (req, res) => {
    albums.retrieveAlbums()
        .then(album => { 
            if (album !== null) {
                res.json(album);
            } else {
                res.status(404).json({ Error: 'The requested album document could not be found for retrieval.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The requested album document could not be retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/albums/:_id', (req, res) => {
    albums.retrieveAlbumByID(req.params._id)
    .then(album => { 
        if (album !== null) {
            res.json(album);
        } else {
            res.status(404).json({ Error: 'Requested document could not be found for retrieval.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieval of the requested document failed.' });
    });

});


// UPDATE controller ************************************
app.put('/albums/:_id', (req, res) => {
    albums.updateAlbum(
        req.params._id, 
        req.body.title, 
        req.body.artist, 
        req.body.releaseDate,
        req.body.numberOfSongs
    )
    .then(album => {
        res.json(album);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The album document could not be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/albums/:_id', (req, res) => {
    albums.deleteAlbumById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Deletion of that album document was successful.' });
            } else {
                res.status(404).json({ Error: 'Requested album document for deletion could not be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Deletion of the album document was unsuccessful.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});