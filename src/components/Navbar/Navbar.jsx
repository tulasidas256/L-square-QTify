import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import style from "./Navbar.module.css";


const Navbar = () => {

    return (
        <nav className={style.navbar}>
            <a href="/">
            <Logo/>
            </a>
            <Search placeholder="Search a album of your choice"/>
            <button className={style.feed}>Give Feedback</button>
        </nav>
    );
};

export default Navbar;