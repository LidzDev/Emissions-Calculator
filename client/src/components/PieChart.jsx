import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./static/PieChart.css"

const PieChart = ({ pieChartData }) => {

const options = {
    credits: { 
        enabled: false 
    },
    accessibility: {
        enabled: false,
    },
    chart: {
        type: "pie"
    },
    title: {
        text: "Employee Emissions"
    },
    subtitle:{
        text: "See employees' emissions in relation to the company as a whole."
    },
    tooltip: {
        pointFormat: "<b>Emissions</b>: {point.y} kg",
    },
    series: [
        {
            data: pieChartData,
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
        },
    ],
};


    return ( 
        <div className="charts" id="pie-chart">
            <HighchartsReact highcharts={Highcharts} options={options} className="charts"/>
        </div>
    );
};

export default PieChart;
