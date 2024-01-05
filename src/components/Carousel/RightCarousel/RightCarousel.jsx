import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from "../../../assets/Right Navigation.svg";
import style from "./RightCarousel.module.css";

const RightCarousel = ()=>{
	const swiper = useSwiper();
	const [isEnd,setIsEnd] = useState(swiper.isEnd);
	
	useEffect(()=>{
		swiper.on("slideChange",function(){
			setIsEnd(swiper.isEnd);
		})
	},[]);
	
	return(
	<div className={style.RightNavigation}>
		{!isEnd && < RightArrow onClick={()=> swiper.slideNext()}/>}
	</div>
	);
	
};

export default RightCarousel;