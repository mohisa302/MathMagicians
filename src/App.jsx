import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import './styles/App.css';
import Header from './components/Header';

const App = () => (
  <div className="pageContainer">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="MathMagicians/" element={<Home />} />
        <Route path="MathMagicians/calculate" element={<Calculator />} />
        <Route path="MathMagicians/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
