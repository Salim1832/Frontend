import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import StyledHero from "./Hero.styled";



function Hero() {

    // Membuat data state movie
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[2].key}`;

    console.log(trailer);

    // async function fetchMovie() {
    //      // Melakukan side effect: fetch data movie (api);
    //     const response = await fetch(
    //         "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    //     );
 
    //     const data = await response.json();
 
    //  // set movie dengan data movie hasil fetch
    //     setMovie(data);
    // }


    useEffect(getDetailMovies, []);

    // membuat 1 data dari trending data movies
    async function getTrendingMovies() {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        const response = await axios(URL);
        return response.data.results[2];
    }

    // membuat fungsi untuk mendapatkan detail movie
    async function getDetailMovies(){
        const TrendingMovie = await getTrendingMovies();
        const id = TrendingMovie.id;

        // fetch movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
        console.log(response);

        setMovie(response.data)
        
    }

    return(
        <StyledHero>
            <div>
                <section>
                    <div className="info">
                        <h2>{movie.title}</h2>
                        <h3>{genres}</h3>
                        <p>{movie.overview}</p>
                        <Button as="a" href={trailer} target="_blank" variant="primary">Watch Movie</Button>
                    </div>
                    <div className="poster">
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                        alt={movie.Title} 
                        />
                    </div>
                </section>
            </div>
        </StyledHero>
    );
}

export default Hero;