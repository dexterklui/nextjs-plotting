import Navbar from "@/app/components/Navbar";
import paths from "@/app/paths";
import Link from "next/link";

export default function svg({ children }) {
  return (
    <div>
      <Navbar icon={false}>
        <Link href={paths.d3Smilie}>Smilie</Link>
        <Link href={paths.d3Data}>CSV Data Info</Link>
      </Navbar>
      {children}
    </div>
  );
}