import React, { useEffect } from "react";
import style from "./Carousel.module.css";
import { Navigation} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LeftCarousel from "./LeftCarousel/LeftCarousel";
import RightCarousel from "./RightCarousel/RightCarousel";
import 'swiper/css';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0,1);
    }, [data]);
    return <></>;
};

const Carousel = ({ data, renderComponent }) => {

    //console.log("Carousel Data",data);
    return (
        <div className={style.wrapper}>
            <Swiper style={{ padding: "0px 20px" }}
                initialSlide={0}
                modules={{Navigation}}
                slidePerView={"auto"}
                spaceBetween={10}
                allowTouchMove
            >
                <Controls data={data} />
                <LeftCarousel />
                <RightCarousel />
                {data.map((elm) =>
                    (<SwiperSlide key={elm.id}>{renderComponent(elm)}</SwiperSlide>)
                )}
            </Swiper>
        </div>
    );
};
export default Carousel;