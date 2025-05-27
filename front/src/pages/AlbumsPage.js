import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AlbumList from '../components/AlbumList';
import { HiOutlineTrash, HiOutlinePencilSquare, HiOutlineFolderPlus } from 'react-icons/hi2';

function AlbumsPage({ setAlbum }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [albums, setAlbums] = useState([]);

    // RETRIEVE the entire list of albums
    const loadAlbums = async () => {
        const response = await fetch('/albums');
        const albums = await response.json();
        setAlbums(albums);
    } 
    

    // UPDATE a single album
    const onEditAlbum = async album => {
        setAlbum(album);
        redirect("/update");
    }


    // DELETE a single album  
    const onDeleteAlbum = async _id => {
        const response = await fetch(`/albums/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/albums');
            const albums = await getResponse.json();
            setAlbums(albums);
        } else {
            console.error(`The album was unable to be deleted. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the albums
    useEffect(() => {
        loadAlbums();
    }, []);

    // DISPLAY the albums
    return (
        <>
            <h2>Albums Catalogue</h2>
            <p>This is a catalogue of music albums with information about the album title, 
                album artist, album date of release, and the number of songs on the album.
                Please press the <HiOutlineTrash/> to delete and album, 
                the <HiOutlinePencilSquare/> to edit an album, and the <HiOutlineFolderPlus/> to
                add a new album.</p>
            <AlbumList 
                albums={albums} 
                onEdit={onEditAlbum} 
                onDelete={onDeleteAlbum} 
            />
        </>
    );
}

export default AlbumsPage;