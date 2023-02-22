import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import './styles/App.css';
import Header from './components/Header';

/* import React, { useState } from 'react'; */
/* <nav className={styles.nav}></nav> */
const App = () => (
  <div className="pageContainer">
    <Header />
    <Routes>
      <Route path="MathMagicians/" element={<Home />} />
      <Route path="MathMagicians/calculate" element={<Calculator />} />
      <Route path="MathMagicians/quotes" element={<Quotes />} />
    </Routes>
  </div>
);
export default App;
