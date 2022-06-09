import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";

function Movies(props) {
    // destructing props
    const {title, movies, setMovies} = props;

    // Buat fungsi tambah film
    // dijalankan ketika tombol diklik
    function tambahfilm() {
        const movie = {
            id: nanoid(8),
            title: "Spiral",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        // Menambahkan movie ke state movies
        // spread operator: copy dan marge array
        setMovies([...movies, movie]);
    }

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                    {
                        /*
                        * Looping data movies: map
                        *Render component movie
                        * kirim props 
                        */
                        movies.map(function(movie) {
                            return <Movie key={movie.id} movie={movie} />;
                        })
                    }
                </div>
                {/* Menambahkan event on Click  */}
                <button onClick={tambahfilm}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;