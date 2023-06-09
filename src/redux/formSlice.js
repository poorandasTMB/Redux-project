const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    formStep: 1,
};

const plans = {
    basic: 200,
    standard: 500,
    plus: 900,
}

const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        update(state, action) {
            if (action.payload.name === "plan" && state?.month) {
                state.price = plans[action.payload.value] * state?.month
            }
            if (action.payload.name === "month" && state?.plan) {
                state.price = plans[state.plan] * action.payload.value
            }
            state[action.payload.name] = action.payload.value;
        }
    }
})

export const { update } = formSlice.actions
export default formSlice.reducer;