const tickColor = "rgb(0,0,150)";

const totalCases = 400;
const totalRequests = 500;

// const casesData = [150, 80, 90, 120, 110];
// const requestsData = [100, 80, 90, 120, 110];

const requestDataPercents = [20, 16, 18, 24, 22];

const casesDataPercents = [20, 16, 18, 24, 22];

const casesData = casesDataPercents.map(
  (caseData) => (caseData / 100) * totalCases
);

const requestsData = requestDataPercents.map(
  (caseData) => (caseData / 100) * totalRequests
);

const casesColors = ["green", "yellow", "gray", "black", "darkblue"];
const requestsColors = ["green", "yellow", "orange", "rgb(100,150,100)", "red"];

// const requestDataPercents = requestsData.map((requestsData) =>
//   Math.floor((requestsData / totalRequests) * 100)
// );

// const casesDataPercents = casesData.map((casesData) =>
//   Math.floor((casesData / totalCases) * 100)
// );

// const casesLabels = [
//   "Successful",

//   "Pending Case",
//   "In Progress",
//   "Closed Cases",
//   "Allowed But Not Started",
// ];

const casesLabels = [
  "Successful",

  "Pending Case",
  "In Progress",
  "Closed Cases",
  "Allowed But Not Started",
].map((caseLabel, i) => `${casesDataPercents[i]} - ${caseLabel}`);

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
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 15,
      },
    },
  },
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

  plugins: {
    legend: {
      display: false,
    },
  },
};
