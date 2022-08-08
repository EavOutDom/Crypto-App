import React from "react";
import logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";
import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
    return (
        <header
            className={"py-[30px] lg:pt-[60px]"}
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="2000"
        >
            <div
                className={
                    "container mx-auto flex justify-between items-center"
                }
            >
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div className="hidden lg:flex items-center gap-x-[50px]">
                    <Nav />
                    <AccountBtns />
                </div>
                <div
                    onClick={() => setNavMobile(true)}
                    className="lg:hidden cursor-pointer"
                >
                    <CgMenuRight className="text-2xl" />
                </div>
            </div>
        </header>
    );
};

export default Header;
