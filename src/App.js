import Footer from './components/Footer';
import LinktreePage from './components/linkreePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path = "/" element = {<LinktreePage/>} />
          <Route path = "/contact" element = {<Contact/>} />
        </Routes>
      </BrowserRouter>

       <footer>
        <Footer/>
       </footer>
    </>
    
  );
}

export default App;
