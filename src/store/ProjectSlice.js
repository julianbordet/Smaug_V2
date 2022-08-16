
import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: []
    },
    reducers: {
        setProjects(state, action){    
            state.projects = action.payload;
        }
    }
})


export default ProjectSlice; 
export const ProjectSliceActions = ProjectSlice.actions
