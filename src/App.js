import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import { Header } from './Component/Header';
import Cartp from './Component/Cartp';
import Contact from './Component/Contact';
import Users from './Component/Users';
import Albums from './Component/Albums';
import Comment from './Component/Comment';
import Todos from './Component/Todos';

// import React, { useState, useEffect } from 'react';

function App() {

  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Header />} />
          
          <Route path="/" element={<Cartp />} />
          <Route path="photos" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="albums" element={<Albums />} />
          <Route path="comments" element={<Comment />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </div>

  );
}

export default App;
