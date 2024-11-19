import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Knowledge from "./components/Knowledge";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Knowledge />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
