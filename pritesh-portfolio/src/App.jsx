import { useEffect } from 'react';
import './App.css'
import Navbar from './Layout/Navbar'
import Hero from './components/Hero'

import Aos from "aos";
import "aos/dist/aos.css";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hireme from './components/Hireme';
const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: false
        });
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Hireme />
            <Contact />
            <footer className="p-3 text-center">
                <h6 className="mb-3">Pritesh Senjaliya</h6>
                <p>Pritesh Senjaliya© All CopyRights Reserved 2024</p>
            </footer>
        </>
    )
}

export default App
