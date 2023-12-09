import React from "react";
import heroHead from "../../assets/vibrating-headphone 1.png";
//import text from "../../assets/text.png";
import style from "./Hero.module.css";

const Hero = () => {

    return (
        <div className={style.hero}>
            <div className={style.txt}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={heroHead} alt="heroHead" width={212} height={212} />
        </div>
    );
};

export default Hero;