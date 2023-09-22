import { feature, mesh } from "topojson-client";

// TopoJSON for world map
export const jsonUrl =
  // "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
  "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export function preprocessData(data) {
  const { countries, land } = data.objects;
  const geojson = {
    land: feature(data, land),
    interiors: mesh(data, countries, (a, b) => a !== b),
  };
  return geojson;
}
