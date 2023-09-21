import Navbar from "@/app/components/Navbar";
import paths from "@/app/paths";
import Link from "next/link";

export default function svg({ children }) {
  return (
    <div>
      <Navbar icon={false}>
        <Link href={paths.d3Smilie}>Smilie</Link>
        <Link href={paths.d3Data}>CSV Data Info</Link>
        <Link href={paths.d3PopulationBar}>Population Bar</Link>
        <Link href={paths.d3IrisScatterPlot}>Iris Scatter</Link>
        <Link href={paths.d3TemperatureLineChart}>Temp Line</Link>
      </Navbar>
      {children}
    </div>
  );
}
