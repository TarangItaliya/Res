import logo from './logo.svg';
import './App.css';
import Home from './component/Pages/Home';
import './assets/css/style.css'

// import './assets/js/Scroll.js'
// import  './assets/css/animate.css'
import Navbar from './component/Pages/Navbar';
import About from './component/Pages/About';
import Education from './component/Pages/Education';
import Skills from './component/Pages/Skills';
import Testimonial from './component/Pages/Testimonial';
import Work from './component/Pages/Work';
import Contact from './component/Pages/Contact';


function App() {
  return (
   <>
    <Navbar />
   <Home />
   {/* <Animation /> */}
   <About />
   <Education />
   <Skills />
   <Testimonial />
   <Work />
   <Contact />
   </>
  );
}

export default App;
