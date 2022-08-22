import './App.css';
import Navbar from './components/Navbar.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Banner from './components/Banner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
