import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddAlbumPageTable = () => {

    const [title, setTitle]                 = useState('');
    const [artist, setArtist]               = useState('');
    const [releaseDate, setReleaseDate]     = useState('');
    const [numberOfSongs, setNumberOfSongs] = useState('');
    
    const redirect = useNavigate();

    const addAlbum = async () => {
        const newAlbum = { title, artist, releaseDate, numberOfSongs };
        const response = await fetch('/albums', {
            method: 'post',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The album has been successfully added!`);
        } else {
            alert(`There was a problem adding the album = ${response.status}`);
        }
        redirect("/albums");
    };


    return (
        <>
        <article>
            <h2>Add an album</h2>
            <p>Here you can add a music album. Please include the title of the album, 
                the album artist, the date the album was released, and the number of 
                songs in the album. The date is in the MM/DD/YYYY format and the number
                of songs must be 1 or more.</p>
            
            <table id="albums">
                <caption>Type in the following information to add an album:</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                        <th>Number of Songs</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Album title</label>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="artist">Artist of the album</label>
                        <input
                            type="text"
                            value={artist}
                            placeholder="Artist"
                            onChange={e => setArtist(e.target.value)} 
                            id="artist" />
                    </td>

                    <td><label for="releaseDate">Date Released</label>
                        <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={releaseDate}
                            onChange={e => setReleaseDate(e.target.value)} 
                            id="releaseDate" />
                    </td>

                    <td><label for="numberOfSongs">Number of songs</label>
                        <input
                            type="number"
                            placeholder="#"
                            value={numberOfSongs}
                            onChange={e => setNumberOfSongs(e.target.value)} 
                            id="numberOfSongs" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addAlbum}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddAlbumPageTable;