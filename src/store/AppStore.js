import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./ChartSlice";




const store = configureStore({
    reducer: {fetchChartData: ChartSlice.reducer}
})

export default store