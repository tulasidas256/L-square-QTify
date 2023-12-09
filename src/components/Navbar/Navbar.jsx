import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import style from "./Navbar.module.css";

const Navbar = () => {

    return (
        <nav className={style.navbar}>
            <a herf="/">
            <Logo/>
            </a>
            <Search plaeholder="Search a album of your choice"/>
            <button className={style.feed}>Give Feedback</button>
        </nav>
    );
};

export default Navbar;