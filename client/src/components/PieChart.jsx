import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({ pieChartData }) => {

const options = {
    chart: {
        type: "pie"
    },
    title: {
        text: "Employee Emissions"
    },
    subtitle:{
        text: "selected employees emissions in relation to the whole company"
    },
    series: [
        {
            data: pieChartData
        }
    ]
};


    return ( 
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default PieChart;
