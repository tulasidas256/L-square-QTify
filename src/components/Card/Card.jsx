import React from "react";
import { Tooltip, Chip } from "@mui/material";
import {Link} from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ data, type }) => {
    
    //console.log("Card Data",data);
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, follows, title, slug, songs } = data;

                return (
                    <Tooltip title={`${songs.length} songs`} placement="top">
                        <Link to={`album/${slug}`}>
                            <div className={style.wrapper}>
                                <div className={style.card}>
                                    <img src={image} alt="album" loading="lazy" />
                                    <div className={style.banner}>
                                        <Chip
                                            label={`${follows} Follows`}
                                            size="small"
                                            className={style.chip}
                                        />
                                    </div>
                                </div>
                                <div className={style.title}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip>
                );
            }
            case "song": {
                const { image, likes, title } = data;

                return (
                    <div className={style.wrapper}>
                        <div className={style.card}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={style.banner}>
                                <div className={style.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.title}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default:
                return <></>;
        }
    };

    return getCard(type);
};

export default Card;