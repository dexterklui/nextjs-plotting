import getCsvData from "@/app/(js)/getCsvData";
import PopulationPlot from "./PopulationPlot";

// Country/Area Population until 2022
const csvUrl =
  "https://gist.githubusercontent.com/dexterklui/9ba762c2a526a53bb7d594a4189c45da/raw/WPP2022_Population.csv";
const fieldKeys = {
  location: "Location",
  population: "TPopulation1July",
  year: "Time",
};
const year = "2022";
const count = 10;

export default async function PopulationBar() {
  const data = await getCsvData(csvUrl);

  if (data == null) return <p> Could not fetch data.</p>;
  return (
    <PopulationPlot
      data={data}
      fieldKeys={fieldKeys}
      year={year}
      count={count}
    />
  );
}
