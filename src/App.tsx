import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Registration from './user/Registration';
import AnagramTest from './components/AnagramTest';
import Home from './home/Home';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/anagram-test" element={<AnagramTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
