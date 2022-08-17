import { configureStore } from "@reduxjs/toolkit";
import BugSlice from "./BugSlice";
import ProjectSlice from "./ProjectSlice";

const store = configureStore({
    reducer: {fetchBugData: BugSlice.reducer, fetchProjectData: ProjectSlice.reducer}
})

export default store