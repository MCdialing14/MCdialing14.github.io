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
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/About":
      component = <About/>
      break
    case "/Education":
        component = <Education/>
        break
    case "/Experience":
        component = <Experience/>
        break
    case "/Extra":
      component = <Extra/>
      break
  }
  return (
    <>
      <Topbar></Topbar>
      <Herosection></Herosection>
      {component}
      <Footer></Footer>
    </>
  );
}

export default App;