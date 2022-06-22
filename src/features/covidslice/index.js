const { createSlice } = require("@reduxjs/toolkit");
const { default: data } = require("../../utils/constants/provinces");

const covidsSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        covids: data,
    },
    reducers: {
        addCovid() {},
    },
});

const covidsReducer = covidsSlice.reducer;
const {addCovid} = covidsSlice.actions;

export default covidsReducer;
export {addCovid};