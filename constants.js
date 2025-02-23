const tickColor = "rgb(0,0,150)";

const totalCases = 500;
const totalRequests = 500;

const casesData = [100, 80, 90, 120, 110];
const requestsData = [100, 80, 90, 120, 110];

const casesColors = ["green", "yellow", "gray", "black", "darkblue"];
const requestsColors = ["green", "yellow", "orange", "rgb(100,150,100)", "red"];

const requestDataPercents = requestsData.map((requestsData) =>
  Math.floor((requestsData / totalRequests) * 100)
);

const casesLabels = [
  "Successful",

  "Pending Case",
  "In Progress",
  "Closed Cases",
  "Allowed But Not Started",
];

const requestsLabels = [
  "Successful",
  "Pending Case",
  "Pending for approval",
  "Approved but request not sent",
  "Rejected Requests",
].map((caseLabel, i) => `${requestDataPercents[i]} - ${caseLabel}`);

const tmaData = [120, 90, 60, 100];
const faData = [100, 70, 50, 90];
const udaData = [110, 30, 71, 97];
const osintData = [40, 50, 110, 56];
const dfData = [120, 100, 55, 100];

// configuration of doughnuts
const chartoptions = {
  //   scales: {
  //     x: {
  //       ticks: {
  //         // Add vertical padding (top and bottom) for labels
  //         padding: 10, // Applies to all sides by default
  //         // OR (Chart.js 3.5+): Target vertical padding directly
  //         paddingTop: 5,
  //         paddingBottom: 5,
  //       },
  //     },
  //   },

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 15,
        // boxHeight: 20,
        // padding: 20,
        // padding: {
        //   top: 20,
        // },
      },

      itemSpacing: 20,

      // align: "start",
    },

    // title: {
    //   display: true,
    //   text: "title",
    // },
  },

  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: "right",
  //       labels: {
  //         boxWidth: 15,
  //         // 👇 Fix: Use the correct reference to generateLabels
  //         generateLabels: function (chart) {
  //           // Get the default labels from the chart's context
  //           const originalLabels =
  //             Chart.defaults.plugins.legend.labels.generateLabels;
  //           const labels = originalLabels.call(this, chart);

  //           // Add empty lines for vertical spacing
  //           return labels.map((label) => ({
  //             ...label,
  //             text: label.text + "\n\n", // Add line breaks
  //           }));
  //         },
  //       },
  //     },
  //   },
};

// configuration of bar chart
const bargraphOptions = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      border: {
        width: 2,
      },
      grid: {
        display: false,
      },

      ticks: {
        // backdropColor: "#1f305e",
        // backdropColor: "rgba(0,0,0,1)",
        color: tickColor,
      },
    },

    y: {
      suggestedMin: 0,
      suggestedMax: 120,

      border: {
        width: 2,
      },
      grid: {
        display: false,
      },
      ticks: {
        // backdropColor: "#1f305e",
        // backdropColor: "rgba(0,0,0,1)",
        color: tickColor,
      },
    },
  },

  maxBarThickness: 50,
  barPercentage: 0.5,
  borderRadius: {
    topLeft: "5",
    topRight: "5",
  },
  //   backgroundColor: "#1f305e",

  plugins: {
    legend: {
      display: false,
    },
  },
};
