import React from "react";
import { navData } from "../data";

const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-x-8 items-center">
                {navData.map((data, index) => {
                    return (
                        <li key={index} className={"border-b-2 border-transparent hover:border-blue transition-all duration-200"}>
                            <a href={data.href}>{data.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
