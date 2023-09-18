import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./slice"

const store = configureStore({
    reducer:{
        counter : counterReducer
    }
})
console.log({store});
export default store;