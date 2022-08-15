import { createSlice } from "@reduxjs/toolkit";

const ChartSlice = createSlice({
    name: 'chart',
    initialState: {
        bugs: 0
    },
    reducers: {
        setBugs(state, action){
            //console.log(action.payload);
            
            state.bugs = action.payload;

           //console.log(state)
        }
    }
})

export default ChartSlice 
export const ChartSliceActions = ChartSlice.actions
