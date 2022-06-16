// import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/data";

/**
 * Buat slilce: untuk generete action dan reducer,
 * menerima param object: name, initialState, reducers
 */

const moviesslice = createSlice( {
    name: "Movies Sclice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload)
        },
        deleteMovie() {},
    }

});

// generete acation dan reducers
const moviesReducers = moviesslice.reducer;
const {addMovie, deleteMovie} = moviesslice.actions;

// export action dan reducer
export default moviesReducers;
export {addMovie, deleteMovie};