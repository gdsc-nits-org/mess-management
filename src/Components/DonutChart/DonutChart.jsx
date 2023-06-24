import Chart from "react-apexcharts";

const Donut = (props) => {
  const { series } = props;

  const options = {
    colors: ["#5c44db", "#a799eb", "#d3cdf4", "#ece8fe"],
    //   responsive: [{
    //     breakpoint: 600,
    //     options: { dataLabels: {
    //       enabled: false},
    //       tooltip: {
    //         enabled: true,
    //       }
    //     }

    // }],
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
    chart: {
      width: "100%",
    },
    subtitle: {
      text: "Nutrients",
      align: "middle",
      margin: 10,
      offsetX: 2,
      offsetY: 84,
      // offsetY: 80,
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
      // enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40%",
        },
      },
    },

    //   chart: {
    //     width: '50%'
    // },
    legend: {
      show: false,
    },
  };

  return (
    <div>
      <Chart options={options} type="donut" series={series} width="210" />
      {/* width="210" */}
    </div>
  );
};

export default Donut;
