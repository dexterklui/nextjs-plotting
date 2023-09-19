"use client";

import useCsvData from "@/app/(hooks)/useCsvData";
import PopulationPlot from "./PopulationPlot";

// Country/Area Population until 2022
const csvUrl =
  "https://gist.githubusercontent.com/dexterklui/9ba762c2a526a53bb7d594a4189c45da/raw/WPP2022_Population.csv";
const locAcsr = (d) => d.Location; // location accessor
const popAcsr = (d) => +d.TPopulation1July; // population accessor

export default function PopulationBar() {
  const [data, isFetching] = useCsvData(csvUrl);

  if (isFetching) return <p>Fetching data...</p>;
  if (!data) return <p>Could not fetch data.</p>;
  return <PopulationPlot data={data} popAcsr={popAcsr} locAcsr={locAcsr} />;
}
