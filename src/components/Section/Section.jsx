import React, { useEffect, useState } from "react";
import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {

    const [carouselToggle, setCarouselToggle] = useState(true);
    //console.log("Section Data",data);
    const [filters, setFilters] = useState([{ key: "all", label: "all" }]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    };

    useEffect(() => {
        if (filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
            })
        }
    }, []);

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) =>
        showFilters && selectedFilter !== 0 ? card.genre.key === filters[selectedFilter].key : card
    );


    return (
        <div>
            <div className={style.header}>
                <h3>{title}</h3>
                <h4 className={style.toggleText}
                    onClick={handleToggle}
                >
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>
            </div>
            {showFilters && (
                <div className={style.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                    />
                </div>
            )}
            {data.length === 0 ?
                (
                    <CircularProgress />
                ) : (
                    <div className={style.cardWrapper}>
                        {!carouselToggle ? (
                            <div className={style.wrapper}>
                                {cardsToRender.map((ele) => { return (<Card data={ele} type={type} />) })}
                            </div>
                        ) : (
                            <Carousel
                                data={cardsToRender}
                                renderComponent={(data) => <Card data={data} type={type} />}
                            />
                        )}
                    </div>
                )}
        </div>
    );
};

export default Section;