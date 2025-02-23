const totalRequestsCtx = document.querySelector("#totalRequestsChart");
const totalCasesCtx = document.querySelector("#totalCasesChart");
const casesBarChartCtx = document.querySelector("#casesBarChart");

// to draw first doughnut
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

// to draw second doughnut
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

// function to draw bar chart
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
    });
}

// function to update data of bar chart when new section is selected
function updateData(chart, newData) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });

  chart.data.datasets.forEach((dataset) => {
    dataset.data = [...newData];
  });
  chart.update();
}
