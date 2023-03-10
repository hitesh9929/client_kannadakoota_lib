// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import QRScanner from './Components/QrScanner';
import HireBooks from './Components/HireBooks';
import {Route,Routes}  from 'react-router-dom';
import QRScannerReturn from './Components/ReturnBooks/QRScannerReturn';
import AvailBooks from './Components/AvailBooks';
import ReturnBook from './Components/ReturnBooks/ReturnBook';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route exact path="/" element={<Landing/>} ></Route>
    <Route exact path="/QrScannerHire" element={<QRScanner/>} ></Route>
    <Route exact path="/hireBook" element={<HireBooks/>} ></Route>
    <Route exact path="/QrScannerReturn" element={<QRScannerReturn/>} ></Route>
    <Route exact path="/returnBook" element={<ReturnBook/>} ></Route>
    <Route exact path="/availBooks" element={<AvailBooks/>} ></Route>
   </Routes>
      <Footer/>
    </div>
  );
}

export default App;
