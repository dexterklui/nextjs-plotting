import { format } from "d3";

/** Year to plot */
export const plotYear = "2022";

/** number of most populated country to plot */
export const plotCount = 10;

// Country/Area Population until 2022
export const csvUrl =
  "https://gist.githubusercontent.com/dexterklui/9ba762c2a526a53bb7d594a4189c45da/raw/WPP2022_Population.csv";

/** Accessor functions to get field values from a data item */
export const accessors = {
  location: (d) => d.Location,
  population: (d) => +d.TPopulation1July * 1000,
  year: (d) => d.Time,
};

/** Formatter functions to format field values */
export const axesFormatters = {
  location: (val) => {
    if (val === "United States of America") return "USA";
    if (val === "Russian Federation") return "Russia";
    return val;
  },
  population: (val) =>
    format(".2s")(val)
      .replace("G", "B")
      .replace(/^0\.0$/, "0"),
};

/** Function to generate tooltip */
export const tooltip = (d) => {
  return `Country: ${accessors.location(d)}
Population: ${format(".3s")(accessors.population(d)).replace("G", "B")}`;
};
