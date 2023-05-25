const { createSlice }= require('@reduxjs/toolkit');

const initialState ={formStep:1};

const formSlice=createSlice({
    name:"formData",
    initialState,
    reducers:{
        update(state,action){
            console.log(action.payload)
            state[action.payload.name] = action.payload.value;
        }
    }
})

export const {update}=formSlice.actions
export default formSlice.reducer;