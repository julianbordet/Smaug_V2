import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./ChartSlice";
import ProjectSlice from "./ProjectSlice";

const store = configureStore({
    reducer: {fetchChartData: ChartSlice.reducer, fetchProjectData: ProjectSlice.reducer}
})

export default store