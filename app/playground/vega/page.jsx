import VegaLiteApiPlot from "./VegaLiteApiPlot";
import VegaLitePlot from "./VegaLitePlot";

export default function Vega() {
  return (
    <div>
      <h1>React Vega (Vega Lite)</h1>
      <VegaLitePlot />
      <h1>Vega Lite API</h1>
      <VegaLiteApiPlot />
    </div>
  );
}
