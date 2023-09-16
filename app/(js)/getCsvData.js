import { csv } from "d3";

export default async function getCsvData(url) {
  const data = await csv(url);
  return data;
}
