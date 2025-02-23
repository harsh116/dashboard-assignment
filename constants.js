const tickColor = "rgb(0,0,150)";

const totalCases = 500;
const totalRequests = 500;

const casesData = [100, 80, 90, 120, 110];
const requestsData = [100, 80, 90, 120, 110];

const casesColors = ["green", "yellow", "gray", "black", "darkblue"];
const requestsColors = ["green", "yellow", "orange", "rgb(100,150,100)", "red"];

const requestDataPercents = requestsData.map((requestsData) =>
  Math.floor((requestsData / totalRequests) * 100),
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
