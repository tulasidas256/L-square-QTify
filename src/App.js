import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "./api/api";
import {Outlet} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";


function App() {

	//const [serachData,useSearchData] = useState();
	const [data, setData] = useState({});

	const generateData = (key, source) => {
		source().then((data) => {
			setData((prevData) => {
				return { ...prevData, [key]: data };
			})
		})
	};

	useEffect(() => {
		generateData("topAlbums", fetchTopAlbums);
		generateData("newAlbums", fetchNewAlbums);
		generateData("songs", fetchSongs);
	}, []);

	const { topAlbums = [], newAlbums = [], songs = [] } = data;

	return (
		<>
			<StyledEngineProvider injectFirst>
				<Navbar />
				<Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
			</StyledEngineProvider>
		</>
	);
}

export default App;
