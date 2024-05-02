import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Country from '../Country/Country.jsx';

function App() {
  return (
    <main className="font-sans container mx-auto px-4 h-lvh">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </main>
  );
}

export default App;
