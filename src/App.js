import React, { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";

const App = () => {
    const [navMobile, setNavMobile] = useState(false);
    useEffect(() => {
        Aos.init({
            duration: 2000,
            delay: 400,
        });
    }, []);
    return (
        <div className={"overflow-hidden"}>
            <Header setNavMobile={setNavMobile} />
            <Hero />
            <div
                className={`${
                    navMobile
                        ? "right-0 duration-500"
                        : "-right-full duration-[2000ms]"
                }  fixed z-10 h-full top-0
              transition-all ease-in-out`}
            >
                <NavMobile setNavMobile={setNavMobile} />
            </div>
            <Stats />
        </div>
    );
};

export default App;
