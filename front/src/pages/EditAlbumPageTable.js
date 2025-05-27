import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditAlbumPageTable = ({ albumToEdit }) => {
 
    const [title, setTitle]                 = useState(albumToEdit.title);
    const [artist, setArtist]               = useState(albumToEdit.artist);
    const [releaseDate, setReleaseDate]     = useState(albumToEdit.releaseDate);
    const [numberOfSongs, setNumberOfSongs] = useState(albumToEdit.numberOfSongs);
    
    const redirect = useNavigate();

    const editAlbum = async () => {
        const response = await fetch(`/albums/${albumToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                artist: artist, 
                releaseDate: releaseDate,
                numberOfSongs: numberOfSongs
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Album has been successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`The album was unable to be edited. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/albums");
    }

    return (
        <>
        <article>
            <h2>Edit an album</h2>
            <p>Here you can edit the information of an album that was added.</p>
            <table id="albums">
                <caption>Type in the following information to edit an album:</caption>
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
                            onClick={editAlbum}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditAlbumPageTable;