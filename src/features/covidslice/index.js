const { createSlice } = require("@reduxjs/toolkit");
const { default: data } = require("../../utils/constants/provinces");

const covidsSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        provinces: data,
    },
    reducers: {
        addCovid(state, action) {
            state.provinces.push(action.payload);
        },
    },
});

const covidsReducer = covidsSlice.reducer;
const {addCovid} = covidsSlice.actions;

export default covidsReducer;
export {addCovid};