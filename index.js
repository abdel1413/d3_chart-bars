d3.select("ul").append("li").text("This is an important Item");
d3.select("body")
  .append("svg")
  .attr("whidth", 400)
  .attr("height", 400)
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .style("fill", "green");

let bodySelector = d3.select("body");
console.log(bodySelector);
let svgSelector = bodySelector
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);
let circleSelector = svgSelector
  .append("circle")
  .attr("cx", 90)
  .attr("cy", 90)
  .attr("r", 50)
  .style("fill", "black");
