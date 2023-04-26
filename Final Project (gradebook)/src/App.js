import './App.css';
import Home from './project/home';
import Table from './project/table';
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaCopyright} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
    <Home/>
    <Table/>
    <footer className="footer"><p><span><FaCopyright/></span><b>EPAM Project</b> <FaFacebook/> <FaInstagram/> <FaTwitter/> <FaWhatsapp/></p><p className='footername'><b>Designed by : Yogendra Reddy</b></p></footer>
    </div>
  );
}

export default App;