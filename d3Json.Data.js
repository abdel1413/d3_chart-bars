const secretAgent = [
  { name: "James Bond", dring: "water&& alcohol", number: "007" },
];

const jsonData = [
  { x_axis: "30", y_axis: "30", r: "20", color: "purple" },
  { x_axis: "70", y_axis: "70", r: "20", color: "black" },
  { x_axis: "110", y_axis: "100", r: "20", color: "red" },
];

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const circleContainer = svg
  .selectAll("circle")
  .data(jsonData)
  .enter()
  .append("circle");

console.log(circleContainer);

const draw = circleContainer
  .attr("cx", (d) => {
    console.log("cx", d.x_axis);
    return d.x_axis;
  })
  .attr("cy", (d) => {
    console.log("cy", d.y_axis);
    return d.y_axis;
  })
  .attr("r", (d) => {
    return d.r;
  })
  .style("fill", (d) => {
    return d.color;
  });
