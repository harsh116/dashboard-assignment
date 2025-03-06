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

// expand  rightside bar on click
document.querySelector(".right-sidebar").addEventListener("click", (e) => {
  // if (e.target.parentElement.getAttribute("class").includes("right-sidebar")) {
  console.log("right sidebar click detected");
  // }

  document.querySelector(".right-sidebar").classList.toggle("expanded");
});

// document.querySelector("body").addEventListener("click", (e) => {
//   if (!e.target.getAttribute("class").includes("right-sidebar")) {
//     document.querySelector(".right-sidebar").classList.remove("expanded");
//   } else {
//     document.querySelector(".right-sidebar").classList.toggle("expanded");
//   }
// });

document.querySelectorAll(".right-sidebar span").forEach((ele) => {
  console.log("ele width: ", ele.offsetWidth);
  ele.parentElement.style.transform = `translateX(${ele.offsetWidth}px)`;
});
