import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Community from '../src/pages/Community';
import Gallery from '../src/pages/Gallery';
import Pets from '../src/pages/Pets';
import Login from '../src/pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />;
        <Route path='/community' element={<Community/>} />;
        <Route path='/gallery' element={<Gallery/>} />;
        <Route path='/pets' element={<Pets/>} />;
        <Route path='/login' element={<Login/>} />;
      </Routes>
    <Footer/>  
    </BrowserRouter>
  );
}

export default App;
