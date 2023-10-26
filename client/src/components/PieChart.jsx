import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({ pieChartData }) => {
    const options = {
        credits: {
            enabled: false,
        },
        accessibility: {
            enabled: false,
        },
        chart: {
            type: "pie",
        },
        title: {
            text: "Employee Emissions",
        },
        subtitle: {
            text: "Selected employees emissions in relation to the whole company",
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
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default PieChart;
