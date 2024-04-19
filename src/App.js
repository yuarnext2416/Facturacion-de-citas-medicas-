import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registro from './Registro';
import Inicio from './Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} /> // Asegúrate de que esta ruta coincida con tu necesidad
      </Routes>
    </Router>
  );
}

export default App;
