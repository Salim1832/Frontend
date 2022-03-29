import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src="https://picsum.photos/350/350" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__add}>Add Movie</h1>
                    <div className={styles.form__title}>
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" className={styles.form__input} id="title" />
                    </div>
                    <div>
                        <label htmlFor="" className={styles.form__date}>Year</label><br/>
                        <input className={styles.form__input} type="text" id="date"/>
                    </div>
                    <button className={styles.form__button}>Submit</button>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;