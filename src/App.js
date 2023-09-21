
import './App.css';
import Header from './components/Header'
import Home from "./page/Home";
import BlogArchive from "./page/BlogArchive";
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
    <Header/>
    {/* <Hero/>
    <About/>
    <Projects/>
   <Blog/>
    <Contact/> */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogArchive />} />
      </Routes>

    <Footer/>
   </>
  );
}

export default App;
