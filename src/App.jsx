import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import './styles/App.css';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <div className="pageContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculate" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
