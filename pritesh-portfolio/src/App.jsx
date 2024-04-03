import { useEffect } from 'react';
import './App.css'
import Navbar from './Layout/Navbar'
import Hero from './components/Hero'

import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: "mobile",
        });
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
        </>
    )
}

export default App
