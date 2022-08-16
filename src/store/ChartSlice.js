import { createSlice } from "@reduxjs/toolkit";

const ChartSlice = createSlice({
    name: 'chart',
    initialState: {
        bugs: [],
        bug: []
    },
    reducers: {
        setBugs(state, action){  
            state.bugs = action.payload;
        },
        getSingleBug(state, action){
            state.bug = action.payload;
        }
    }
})

export default ChartSlice 
export const ChartSliceActions = ChartSlice.actions
