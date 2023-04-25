import './App.css';
import Home from './project/home';
import Table from './project/table';
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaCopyright} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
    <Home/>
    <Table/>
    <footer className="footer"><p><FaCopyright/>EPAM Project</p><FaFacebook/> <FaInstagram/> <FaTwitter/> <FaWhatsapp/></footer>
    </div>
  );
}

export default App;