import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateCharts = {
    bugsDue: {
        due: 11,
        notDue: 9
    },
    bugSeverity : {
        critical: 4,
        major: 6,
        minor: 2,
        low: 8
    },
    bugPriority : {
        high: 10,
        medium: 5,
        low: 5
    },
    bugsByProject : {
        project1 : 7,
        project2 : 3,
        project3 : 10
    }
}

const chartSlice = createSlice({
    name: 'chart',
    initialState: initialStateCharts,
    reducers: {
        getBugs(state){
            console.log(' console log desde chart slice')
        }
    }
})

const store = configureStore({
    reducer: { chartData : chartSlice.reducer }
})

export const chartActions = chartSlice.actions;
export { store }