import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/moviesslice";


/**
 * buatstore
 * menyimpan berbagai slice reducer
 */
const store = configureStore({
    reducer: {
        movies: moviesReducers,
    },
});

export default store;