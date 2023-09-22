import getCsvData from "@/app/_js/getCsvData";
import IrisScatterPlot from "./IrisScatterPlot";
import { csvUrl } from "./dataSpec";

export default async function PopulationBar() {
  const data = await getCsvData(csvUrl);

  if (data == null) return <p> Could not fetch data.</p>;
  return <IrisScatterPlot data={data} />;
}
