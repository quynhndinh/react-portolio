import './App.css';
import Home from './Component/home/Home'
import About from './Component/about/About'
import Projects from './Component/projects/Projects';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
