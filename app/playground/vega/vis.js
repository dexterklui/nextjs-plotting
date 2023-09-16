import * as vl from "vega-lite-api";

const vis = vl
  .markCircle({
    // fill: true,
    // stroke: false,
    size: 50, // area
    opacity: 0.4,
  })
  .encode(
    vl.x().fieldQ("weight").scale({ zero: false }),
    vl.y().fieldQ("horsepower").scale({ zero: false }),
    vl.tooltip("name"),
    vl.color().fieldN("origin")
    // vl.size().fieldQ("weight"),
  );

export default vis;
