import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {

  return (
      <div>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </Router>
      </div>
  );
}

export default App;
