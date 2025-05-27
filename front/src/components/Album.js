import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { HiOutlineTrash, HiOutlinePencilSquare } from 'react-icons/hi2';


function Album({ album, onEdit, onDelete }) {
    return (
        <tr>
            <td>{album.title}</td>
            <td>{album.artist}</td>
            <td>{album.releaseDate.slice(0,10)}</td>
            <td>{album.numberOfSongs}</td>
            <td><HiOutlineTrash size="25px" onClick={() => onDelete(album._id)} /></td>
            <td><HiOutlinePencilSquare size="25px" onClick={() => onEdit(album)} /></td>
        </tr>
    );
}

export default Album;