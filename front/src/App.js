// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import AlbumsPage from './pages/AlbumsPage';
import AddAlbumPageTable from './pages/AddAlbumPageTable';
import EditAlbumPageTable from './pages/EditAlbumPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [album, setAlbumToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>
            <img src="android-chrome-192x192.png" alt="Ah Young Lee"/>
              Ah Young Lee</h1>
            <p>Full Stack MERN App</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/albums" element={<AlbumsPage setAlbum={setAlbumToEdit}/>} />
                    {/* <Route path="/create" element={<AddAlbumPageForm />} />  */}
                    <Route path="/create" element={<AddAlbumPageTable />} /> 
                    {/* <Route path="/update" element={<EditAlbumPageForm albumToEdit={album} />} /> */}
                    <Route path="/update" element={<EditAlbumPageTable albumToEdit={album} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Ah Young Lee</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;