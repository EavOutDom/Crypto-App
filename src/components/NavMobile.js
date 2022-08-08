import React from "react";
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
    return (
        <nav
            className="lg:hidden bg-white text-violet h-full
          w-80 flex justify-center items-center top-0 bottom-0
        "
        >
            <div
                onClick={() => setNavMobile(false)}
                className="absolute top-2 left-2 cursor-pointer"
            >
                <CgClose className={"text-2xl"} />
            </div>
            <ul className={"flex flex-col gap-y-8 text-xl"}>
                {navData.map((data, index) => {
                    return (
                        <li key={index}>
                            <a href={data.href}>{data.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMobile;
