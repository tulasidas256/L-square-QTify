import React from "react";
import style from "./Search.module.css"
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const SearchBar = ({placeholder}) => {

    const onSubmit = (e) =>{
        e.preventDefault();    };

    return (
        <form className={style.wrapper}
        onSubmit={onSubmit}
        >
            <input className={style.search} 
            placeholder={placeholder}
            />
            
            <button className={style.searchButton}
            type="submit"
            >
                <SearchIcon/>
            </button>
        </form>
        
    );
};

export default SearchBar;