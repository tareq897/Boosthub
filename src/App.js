import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menubar from './components/Menubar/Menubar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
