import './App.css';
import Topbar from './Topbar';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import About from './pages/About';
import Home from './pages/Home'
import Education from './pages/Education';
import Experience from'./pages/Experience';
import Extra from './pages/Extra';

function App() {
  return (
    <>
      <div id="home">
        <Home></Home>
      </div>
      
      <Topbar></Topbar>
      <Herosection></Herosection>

      <div id='about'>
        <About></About>
      </div>
      
      <div id="education">
        <Education></Education>
      </div>
      
      <div id="experience">
        <Experience></Experience>
      </div>
      
      <div id="extra">
        <Extra></Extra>
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default App;