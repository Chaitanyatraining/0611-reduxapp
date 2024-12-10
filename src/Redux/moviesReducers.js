import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('data/fetchData',
    async(url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
)

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        data:[]
    },
    reducer:{},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            console.log(action)
            state.data = action.payload
        })
    }
})

export default movieSlice.reducer