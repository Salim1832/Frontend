const { configureStore } = require("@reduxjs/toolkit");
const { default: covidsReducer } = require("../features/covidslice");


const store = configureStore({
    reducer: {
        covids: covidsReducer,
    },
});

export default store;