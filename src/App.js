import logo from './logo.svg';
import './App.css';
import './costum.css'
import './media.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMneu from './components/Header/MobileMenu';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { MyRouter } from './Router';
function App() {

  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
        <MobileMneu></MobileMneu>
      </>
    
  );
}

export default App;
