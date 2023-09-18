import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count:0},
    reducers:{
        incBy1 : (state,action)=>{
            state.count = action.payload;
            return state;
        },
        decby1 :(state,action)=>{
          state.count--
          return state
        }
    }
})
console.log({counterSlice});
export const {actions: counterActions , reducer: counterReducer} = counterSlice