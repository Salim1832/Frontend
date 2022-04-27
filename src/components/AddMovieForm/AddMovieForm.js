import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
    // destructing props
    const {movies, setMovies} = props;
    // Membuat state title
    const [title, setTitle] = useState("");
    // Membuat state date
    const [date, setDate] = useState("");
    // Membuat state option
    const [genre, setGenre] = useState("")

    const [poster, setPoster] = useState("")

    // Membuat state dan title
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDataError, setIsDataEror] = useState(false);

    // Membuat fungsi handle title
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleGenre(e) {
        setGenre(e.target.value)
    }

    function handlePoster(e) {
        setPoster(e.target.value)
    }

    // Handle form ketika disubmit
    function handleSubmit(e){
        // Mencegah prilaku default (refersh)
        e.preventDefault();

        // Jika title kosong , maka set seror title true
        if (title == "") {
            setIsTitleError(true);
        }
        // Jika date kosong, maka set eror date true
        else if (date == "") {
            setIsTitleError(false);
            setIsDataEror(true);
        }
        // Jika tidak kogong, tambah data
        else {
             // Siapkan movie yang ingin diinput
            const movie = {
            id: nanoid(),
            title: title,
            year: date,        
            type: "Movie",
            poster: poster,
            genre: genre,
            };

        setMovies([...movies, movie]);
        setIsTitleError(false);
        setIsDataEror(false);
        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://picsum.photos/536/354" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="title" className={styles.form__label}>Title</label>
                            <input
                            id="title"
                            className={styles.form__input}
                            name="title" 
                            type="text"
                            value={title}
                            onChange={handleTitle} 
                            />
                            {/* Jika error title tru: eror muncul
                            Jika Jika tidak, munculkan string kosong */}
                            {isTitleError && <Alert><p className={styles.form__alert}>Title Wajib Diisi!</p></Alert>}
                            
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="date" className={styles.form__label}>
                            Date
                            </label>
                            <input 
                            id="date"
                            className={styles.form__input}
                            name="date"
                            type="number" 
                            value={date}
                            onChange={handleDate}
                            />
                            {isDataError && <Alert><p className={styles.form__alert}>Date Wajib Diisi</p></Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="poster" className={styles.form__label}>Poster</label>
                            <input id="poster" 
                            name="poster" 
                            type="url" 
                            value={poster} 
                            onChange={handlePoster} 
                            className={styles.form__input}
                            />
                            <label htmlFor="genre" className={styles.form__labelgenre}>Genre</label>
                            <select value={genre} onChange={handleGenre} name="genre" id="genre" className={styles.form__genre}>
                                <option value="Action">Action</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>
                        </div>
                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                    {/* <div className={styles.form__title}>
                        <label htmlFor="title">Title</label><br/>
                        <input onChange={handleTitle} type="text" className={styles.form__input} id="title" value={title}/>
                    </div>
                    <div>
                        <label htmlFor="" className={styles.form__date}>Date</label><br/>
                        <input onChange={handleDate} className={styles.form__input} type="number" id="date" value={date}/>
                    </div>
                    <button onSubmit={handleSubmit} className={styles.form__button}>Submit</button> */}
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;