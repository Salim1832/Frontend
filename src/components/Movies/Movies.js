import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
    // destructing props
    const {title} = props;

    // Buat fungsi tambah film
    // dijalankan ketika tombol diklik
    
   const movies = useSelector((store) => store.movies.movies)

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
            </section>
        </div>
    );
}

export default Movies;