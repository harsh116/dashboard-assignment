//edit profile
// log-out

//data
// people
// location
// arrests

const totalCases = 500;
const totalRequests = 500;

const casesData = [100, 80, 90, 120, 110];
const requestsData = [100, 80, 90, 120, 110];

const casesColors = ["blue", "orange", "yellow", "gray", "red"];
const requestsColors = ["blue", "orange", "yellow", "gray", "red"];

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
  "In Progress",
  "Closed Cases",
  "Allowed But Not Started",
].map((caseLabel, i) => `${requestDataPercents[i]} - ${caseLabel}`);

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

document.querySelector("#casesNumbers").textContent = totalCases;
document.querySelector("#requestsNumbers").textContent = totalRequests;

function expand() {
  document.querySelector(".leftside").classList.toggle("expanded");
}

const totalRequestsCtx = document.querySelector("#totalRequestsChart");

const totalCasesCtx = document.querySelector("#totalCasesChart");

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

totalCasesDraw();
totalRequestsDraw();
