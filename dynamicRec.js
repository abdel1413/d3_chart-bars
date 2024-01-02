const dataset = [30, 70, 110];

const b = d3
  .select("body")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const cir = b.selectAll("circle").data(dataset).enter().append("circle");

const drw = cir
  .attr("cx", (d) => d)
  .attr("cy", (d) => d)
  .attr("r", 20)
  .style("fill", (d) => {
    let color;
    d == 30
      ? (color = "blue")
      : d == 70
      ? (color = "purple")
      : (color = "yellow");
    return color;
  });
