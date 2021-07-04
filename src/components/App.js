import './App.scss';
import Navbar from './navbar';
import Home from './home';
import Project from './project';
import Info from './info';
import Footer from './footer';
import About from "./about";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Project />
    <Info />
    <hr />
    <Footer />
    </>
  );
}

export default App;
