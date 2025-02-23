// adding total cases and total requests in its respective element
document.querySelector("#casesNumbers").textContent = totalCases;
document.querySelector("#requestsNumbers").textContent = totalRequests;

// callback function to handle click event of hamburger icon
function expand() {
  document.querySelector(".leftside").classList.toggle("expanded");
}

// calling functions to draw charts
totalCasesDraw();
totalRequestsDraw();
casesBarChartDraw();
