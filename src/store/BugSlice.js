import { createSlice } from "@reduxjs/toolkit";

const BugSlice = createSlice({
    name: 'bugs',
    initialState: {
        bugListFetchedFromDB: [],
        bugFetchedFromDB: [],
        inMemoryBug: {
            bugId : null,
            title : null,
            projectId : null,
            severity : null,
            priority : null,
            dateCreated : null,
            dueDate : null,
            assignedTo : null,
            isFixed : null,
            dateFixed : null,
            description : null,
            stepsToReproduce : null,
            createdBy : null
        }
    },
    reducers: {
        setBugs(state, action){  
            state.bugs = action.payload;
        },
        getSingleBug(state, action){
            state.bug = action.payload;
        },
        updateInMemoryBug(state, action){
            state.inMemoryBug = action.payload;
        }
    }
})

export default BugSlice; 
export const BugSliceActions = BugSlice.actions;
