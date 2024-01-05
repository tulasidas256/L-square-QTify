import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../../assets/Left Navigation.svg";
import style from "./LeftCarousel.module.css";

const LeftCarousel = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning);
        })
    }, []);

    return (
        <div className={style.leftNavigation}>
            {!isBeginning && < LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );

};

export default LeftCarousel;