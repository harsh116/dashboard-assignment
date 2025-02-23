//edit profile
// log-out

//data
// people
// location
// arrests

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

document.querySelector("#casesNumbers").textContent = totalCases;
document.querySelector("#requestsNumbers").textContent = totalRequests;

// callback function to handle click event of hamburger icon
function expand() {
  document.querySelector(".leftside").classList.toggle("expanded");
}

const totalRequestsCtx = document.querySelector("#totalRequestsChart");
const totalCasesCtx = document.querySelector("#totalCasesChart");
const casesBarChartCtx = document.querySelector("#casesBarChart");

function totalCasesDraw() {
  const totalCasesChart = new Chart(totalCasesCtx, {
    type: "doughnut",
    data: {
      labels: casesLabels,
      datasets: [
        {
          data: casesData,
          backgroundColor: casesColors,
          cutout: "70%",
        },
      ],
    },
    options: chartoptions,
  });

  window.addEventListener("resize", function () {
    totalCasesChart.resize(); // Resize the chart manually when the window is resized
  });
}

function totalRequestsDraw() {
  const totalRequestsChart = new Chart(totalRequestsCtx, {
    type: "doughnut",
    data: {
      labels: requestsLabels,
      datasets: [
        {
          data: requestsData,
          backgroundColor: requestsColors,
        },
      ],
    },

    options: chartoptions,
  });

  window.addEventListener("resize", function () {
    totalRequestsChart.resize(); // Resize the chart manually when the window is resized
  });
}

function casesBarChartDraw() {
  const casesBarChart = new Chart(casesBarChartCtx, {
    type: "bar",
    data: {
      labels: ["CDR", "IPDR", "PCAP", "ISD"],
      datasets: [
        {
          data: [120, 90, 60, 100],
          backgroundColor: "orange",
        },
      ],
    },

    options: bargraphOptions,
  });

  // bar graph update section

  let navElementSectionSelected = document.querySelector("#tma");

  // callback function listening to all 5 sections to update bar graph

  document
    .querySelector(".bar-graph-section .nav")
    .addEventListener("click", (e) => {
      console.log(e.target);

      navElementSectionSelected.classList.remove("selected");
      navElementSectionSelected = e.target;
      navElementSectionSelected.classList.add("selected");

      const id = e.target.getAttribute("id");

      switch (id) {
        case "tma":
          updateData(casesBarChart, tmaData);
          break;
        case "fa":
          updateData(casesBarChart, faData);
          break;
        case "uda":
          updateData(casesBarChart, udaData);
          break;
        case "osint":
          updateData(casesBarChart, osintData);
          break;
        case "df":
          updateData(casesBarChart, dfData);
          break;
      }

      // console.log("id: ", id);
    });
}

function updateData(chart, newData) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });

  chart.data.datasets.forEach((dataset) => {
    dataset.data = [...newData];
  });
  chart.update();
}

totalCasesDraw();
totalRequestsDraw();
casesBarChartDraw();
