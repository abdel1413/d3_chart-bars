const dataArray = [1, 3, 4, 5, 6];
const p = d3
  .select("body")
  .selectAll("p")
  .data(dataArray)
  .enter()
  .append("p")
  .text((d, i) => {
    let num = 3;
    let temp;
    temp = d + num;
    return `value: ${temp}; index: ${i} `;
  });

// create circles in SVG using dataset
let circleData = [40, 20, 10];

const body = d3
  .select("body")
  .append("svg")
  .attr("width", 100)
  .attr("height", 100);

const circles = body
  .selectAll("circle")
  .data(circleData)
  .enter()
  .append("circle");

circles
  .attr("cx", 50)
  .attr("cy", 50)

  .attr("r", (d) => d)
  .style("fill", (d) => {
    let color;
    d == 40
      ? (color = "green")
      : d == 20
      ? (color = "yellow")
      : (color = "red");
    return color;
  });

console.log(circles);
