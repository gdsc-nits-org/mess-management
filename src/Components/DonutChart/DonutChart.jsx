import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#5c44db", "#a799eb", "#d3cdf4", "#ece8fe"],
        labels: ["Carbs", "Fats", "Fibres", "Protein"],
        dataLabels: {
          style: {
            fontSize: "0.3rem",
            fontWeight: "50",
            colors: ["#ece8fe", "#ece8fe", "#7b64e2", "#7b64e2"],
          },
          dropShadow: {
            enabled: false,
          },
          background: {
            enabled: true,
            foreColor: "#000",
            borderRadius: 2,
            padding: 5,
            margin: 10,
            borderColor: "none",
          },
        },
        subtitle: {
          text: "Nutrients",
          align: "middle",
          margin: 10,
          offsetX: 2,
          offsetY: 84,
          floating: true,
          style: {
            fontSize: "0.5rem",
            fontWeight: "bold",
            color: "#000000",
          },
        },
        stroke: {
          width: 0,
        },
        tooltip: {
          // enabled: false
        },
        plotOptions: {
          pie: {
            donut: {
              size: "40%",
            },
          },
        },
        legend: {
          show: false,
        },
      },
      series: [48.8, 24.3, 14.6, 12.3],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="210"
        />
      </div>
    );
  }
}

export default Donut;
