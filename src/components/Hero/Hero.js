import { useEffect, useState } from "react";
import Button from "../ui/button";
import StyledHero from "./Hero.styled";



function Hero() {

    // Membuat data state movie
    const [movie, setMovie] = useState("");

    async function fetchMovie() {
         // Melakukan side effect: fetch data movie (api);
        const response = await fetch(
            "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        );
 
        const data = await response.json();
 
     // set movie dengan data movie hasil fetch
        setMovie(data);
 
    }

    useEffect(fetchMovie, []);

    return(
        <StyledHero>
            <div>
                <section>
                    <div>
                        <h2>{movie.Title}</h2>
                        <h3>{movie.Genre}</h3>
                        <p>{movie.Plot}</p>
                        <Button variant="primary">Watch Movie</Button>
                    </div>
                    <div>
                        <img 
                        src={movie.Poster} 
                        alt={movie.Title} 
                        />
                    </div>
                </section>
            </div>
        </StyledHero>
    );
}

export default Hero;