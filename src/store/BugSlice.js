import { createSlice } from "@reduxjs/toolkit";

const newBug = {
    bugId : 0,
    title : "",
    projectId : "",
    severity : "",
    priority : "",
    dateCreated : null,
    dueDate : "",
    assignedTo : "",
    isFixed : "",
    dateFixed : "",
    description : "",
    stepsToReproduce : "",
    createdBy : ""
}; 

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
        updateInMemoryBugList(state, action){  
            state.bugListFetchedFromDB = action.payload;
        },
        updateInMemoryBug(state, action){
            state.inMemoryBug = action.payload;
        },
        updateBugTitle(state, action){
            state.inMemoryBug.title = action.payload;
        },
        updateBugProjectId(state, action){
            state.inMemoryBug.projectId = action.payload;
        },
        updateBugSeverity(state, action){
            state.inMemoryBug.severity = action.payload;
        },
        updateBugPriority(state, action){
            state.inMemoryBug.priority = action.payload;
        },
        updateBugDateCreated(state, action){
            state.inMemoryBug.dateCreated = action.payload;
        },
        updateBugDueDate(state, action){
            state.inMemoryBug.dueDate = action.payload;
        },
        updateBugAssignedTo(state, action){
            state.inMemoryBug.assignedTo = action.payload;
        },
        updateBugIsFixed(state, action){
            state.inMemoryBug.isFixed = action.payload;
        },
        updateBugDescription(state, action){
            state.inMemoryBug.description = action.payload;
        },
        updateBugStepsToReproduce(state, action){
            state.inMemoryBug.stepsToReproduce = action.payload;
        },
        updateBugCreatedBy(state, action){
            state.inMemoryBug.createdBy = action.payload;
          
        },
        updateBugId(state, action){
            state.inMemoryBug.bugId = action.payload;
        },
        updateBugDateFixed(state, action){
            state.inMemoryBug.dateFixed = action.payload;
        },
        setupNewBug(state){
            state.inMemoryBug = newBug;
        }
    }
})

export default BugSlice; 
export const BugSliceActions = BugSlice.actions;
