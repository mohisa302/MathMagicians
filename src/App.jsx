import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import './styles/App.css';
import Header from './components/Header';

/* import React, { useState } from 'react'; */
/* <nav className={styles.nav}></nav> */
const App = () => (
  <div className="homecontainer">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculate" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </div>
);
export default App;
