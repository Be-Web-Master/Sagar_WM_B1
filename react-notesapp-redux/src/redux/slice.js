import { createSlice } from "@reduxjs/toolkit";
const notesSlice = createSlice({
    name:"notes",
    initialState:[],
    reducers:{
        notesAdd(state,action){
            state.push({
                id:action.payload.id,
                text:action.payload.text,

            })
        }
    }
})
export const { notesAdd } = notesSlice.actions
export default notesSlice.reducer;