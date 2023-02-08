// Add button click event
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const line = document.querySelector("#line");
  if (line.getAttribute("stroke") === "red") {
    line.setAttribute("stroke", "darkblue");
  } else {
    line.setAttribute("stroke", "red");
  }
});

// Add circle mouse over event
const circle = document.querySelector("#circle");
circle.addEventListener("mouseover", () => {
  circle.setAttribute("fill", "orange");
});
circle.addEventListener("mouseout", () => {
  circle.setAttribute("fill", "yellow");
});
