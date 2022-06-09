import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function PopularMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    };

    console.log(movies);


    return(
        <div>
            <Hero/>
            <Movies title="Popular Movie" movies={movies}/>
        </div>
        
    );
}

export default PopularMovie;