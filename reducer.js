import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

export  const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increement :(state)=>{
            state.value+=1
        },
        decreement :(state)=>{
            state.value-=1
        }
    }
})
export const { increement, decreement } = counterSlice.actions

export default counterSlice.reducer