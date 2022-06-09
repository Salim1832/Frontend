import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";


function TopRatedMovie() {

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        getTopRated();
    }, []);

    async function getTopRated() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.TOP_RATED);
        setMovies(response.data.results);
    };

    console.log(movies);
    return(
        <div>
            <Hero/>
            <Movies title="Top Rated" movies={movies}/>
        </div>
    );
}

export default TopRatedMovie;