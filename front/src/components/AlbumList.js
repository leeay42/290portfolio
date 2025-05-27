import React from 'react';
import Album from './Album';
import { Link } from 'react-router-dom';
import { HiOutlineFolderPlus } from "react-icons/hi2";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function AlbumList({ albums, onDelete, onEdit }) {
    return (
        <table id="albums">
            <caption>Add and Edit Albums</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Release Date</th>
                    <th>Number of Songs</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Add <Link to="/create"><HiOutlineFolderPlus size="30px"/></Link></th>
                </tr>
            </thead>
            <tbody>
                {albums.map((album, i) => 
                    <Album 
                        album={album} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default AlbumList;
