import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./slice";
export default store = configureStore({
    reducer:{
        notes:notesReducer
    }
})
