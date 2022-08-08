import React from "react";
import Hero from "./components/Hero";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const App = () => {
    useEffect(() => {
      Aos.init({
        duration: 2000,
        delay: 400,
      });
    }, []);
    return (
        <div className={"overflow-hidden"}>
            <Hero />
        </div>
    );
};

export default App;
