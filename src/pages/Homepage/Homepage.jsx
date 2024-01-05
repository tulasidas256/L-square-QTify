
import React from "react";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import style from "./Hompage.module.css";
import { fetchFilters } from "../../api/api";

const Homepage = () => {

  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;
  console.log("Homepage Data", data);

  return (
    <>
      <Hero />
      <div className={style.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} filterSource={fetchFilters} type="song" />
      </div>

    </>
  );

};

export default Homepage;