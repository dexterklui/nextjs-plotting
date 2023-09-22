import { geoGraticule } from "d3";
import plotSpec from "./plotSpec";

const { strokeWidth } = plotSpec;
const graticule = geoGraticule();

export default function FeatureMarks({
  data: { land, interiors },
  geoPathGenerator,
}) {
  const Graticule = () => (
    <path
      className="stroke-gray-400 fill-none"
      strokeWidth={strokeWidth}
      d={geoPathGenerator(graticule())}
    />
  );

  const Land = () =>
    land.features.map((feature, i) => (
      <path
        className="d3-feature-marks stroke-none fill-cyan-700"
        strokeWidth={strokeWidth}
        key={i}
        d={geoPathGenerator(feature)}
      />
    ));

  const InternalBorders = () => (
    <path
      className="stroke-gray-200 fill-none"
      strokeWidth={strokeWidth}
      d={geoPathGenerator(interiors)}
    />
  );

  return (
    <>
      <Graticule />
      <Land />
      <InternalBorders />
    </>
  );
}
