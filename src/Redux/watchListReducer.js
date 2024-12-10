import {createSlice} from '@reduxjs/toolkit'

const watchListSlice = createSlice({
    name:'watchlistmovies',
    initialState:[],
    reducers:{
        add(state, action){
            console.log(action)
            state.push(action.payload)
        },
        remove(state, action){

        }
    }
})
export default watchListSlice.reducer
export const {add, remove} = watchListSlice.actions
