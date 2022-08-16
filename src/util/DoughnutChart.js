import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const DoughnutChart = ({chartData}) =>{

    return(
        <Doughnut data={chartData}></Doughnut>
    )

}

export default DoughnutChart;