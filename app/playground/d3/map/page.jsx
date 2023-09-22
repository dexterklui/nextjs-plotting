import { json } from "d3";
import { jsonUrl, preprocessData } from "./dataSpec";
import Map from "./Map";

export default async function PopulationBar() {
  const fetchedData = await json(jsonUrl);
  const data = preprocessData(fetchedData);

  if (data == null) return <p> Could not fetch data.</p>;
  return <Map data={data} />;
}
