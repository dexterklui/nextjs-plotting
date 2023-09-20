import getCsvData from "@/app/(js)/getCsvData";
import PopulationPlot from "./PopulationPlot";
import { csvUrl } from "./dataSpec";

export default async function PopulationBar() {
  const data = await getCsvData(csvUrl);

  if (data == null) return <p> Could not fetch data.</p>;
  return <PopulationPlot data={data} />;
}
