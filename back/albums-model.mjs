// Models for the Album Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Status 500: Failed to connect to MongoDB server.' });
    } else  {
        console.log('You have connected to the MongoDB Albums collection via Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const albumSchema = mongoose.Schema({
	title:          { type: String, required: true },
	artist:         { type: String, required: true },
	releaseDate:    { type: Date, required: true, default: 'YYYY-MM-DD' },
    numberOfSongs:  { type: Number, required: true, default: '#', min:[1, 'album should have 1 or more songs'] }
});

// Compile the model from the schema 
// by defining the collection name "albums".
const albums = mongoose.model('Album', albumSchema);


// CREATE model *****************************************
const createAlbum = async (title, artist, releaseDate, numberOfSongs) => {
    const album = new albums({ 
        title: title, 
        artist: artist, 
        releaseDate: releaseDate,
        numberOfSongs: numberOfSongs
    });
    return album.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveAlbums = async () => {
    const query = albums.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveAlbumByID = async (_id) => {
    const query = albums.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteAlbumById = async (_id) => {
    const result = await albums.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateAlbum = async (_id, title, artist, releaseDate, numberOfSongs) => {
    const result = await albums.replaceOne({_id: _id }, {
        title: title, 
        artist: artist, 
        releaseDate: releaseDate,
        numberOfSongs: numberOfSongs
    });
    return { 
        _id: _id, 
        title: title, 
        artist: artist, 
        releaseDate: releaseDate,
        numberOfSongs: numberOfSongs
    }
}

// EXPORT the variables for use in the controller file.
export { createAlbum, retrieveAlbums, retrieveAlbumByID, updateAlbum, deleteAlbumById }