import Link from "next/link";
import paths from "../paths";
import Navbar from "../_components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar>
        <Link href={paths.playground}>
          <h1>Dojo Playground</h1>
        </Link>
        <Link href={paths.recharts}>Recharts</Link>
        <Link href={paths.d3}>D3</Link>
        <Link href={paths.vega}>Vega</Link>
      </Navbar>
      {children}
    </>
  );
}
