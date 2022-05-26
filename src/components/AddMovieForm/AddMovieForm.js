import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
    // destructing props
    const {movies, setMovies} = props;

    // Membuat state object
    const [formData, setFromData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
        genre: "",
    });

    const {title, date, poster, type, genre } = formData; 

    // Membuat fungsi handleChange untuk handle semua imput
    function handleChange(e) {
        const {name, value} = e.target;

       setFromData({
           ... formData,
           [name]: value,
       });
    }

    const [setError, setErrorData] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
    });

    const {isTitleError, isDateError, isPosterError} = setError;

    function validate() {
        // Jika title kosong , maka set seror title true
        if (title == "") {
            setErrorData({...setError, isTitleError: true});
            return false;
        }
        // Jika date kosong, maka set eror date true
        else if (date == "") {
            setErrorData({...setError, isDateError: true, isTitleError: false});
            return false;
        } else if (poster == "") {
            setErrorData({...setError, isPosterError: true, isDateError: false});
            return false;
        }else {
            setErrorData({
                ...setError, 
                isTitleError: false,
                isDateError: false,
                isPosterError: false,
            });
            return true;
        }
    }

    function addMovie() {
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

    }

    // Handle form ketika disubmit
    function handleSubmit(e){
        // Mencegah prilaku default (refersh)
        e.preventDefault();

        validate() && addMovie();
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
                            onChange={handleChange} 
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
                            onChange={handleChange}
                            />
                            {isDateError && <Alert><p className={styles.form__alert}>Date Wajib Diisi</p></Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="poster" className={styles.form__label}>Poster</label>
                            <input id="poster" 
                            name="poster" 
                            type="url" 
                            value={poster} 
                            onChange={handleChange} 
                            className={styles.form__input}
                            />
                            {isPosterError && <Alert><p className={styles.form__alert}>Poster Wajib Diisi</p></Alert>}
                            <label htmlFor="genre" className={styles.form__labelgenre}>Genre</label>
                            <select value={genre} onChange={handleChange} name="genre" id="genre" className={styles.form__genre}>
                                <option value="Action">Action</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>
                        </div>
                        <div>
                            <Button variant="secondary" full>Add Movie</Button>
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