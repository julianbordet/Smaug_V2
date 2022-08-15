
import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: []
    },
    reducers: {
        setProjects(state, action){
            //console.log(action.payload);
            
            state.projects = action.payload;

           //console.log(state)
        }
    }
})


export default ProjectSlice; 
export const ProjectSliceActions = ProjectSlice.actions
