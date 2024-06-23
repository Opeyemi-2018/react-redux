import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    count: 0
}

let countSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        decrement: (state) => {
            state.count -= 1
            if(state.count < 1){
                state.count = 0
            }
        },
        increment: (state) => {
            state.count += 1
        }
    }
})

export let {decrement, increment} = countSlice.actions;
export default countSlice.reducer