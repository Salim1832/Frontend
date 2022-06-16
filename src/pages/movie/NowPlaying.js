import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function NowPlayingMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        getNowPlaying();
    }, []);

    async function getNowPlaying() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        setMovies(response.data.results);
    };

    console.log(movies);


    return(
        <div>
            <Hero/>
            <Movies title="Now Playing" movies={movies}/>
        </div>
    );
}

export default NowPlayingMovie;