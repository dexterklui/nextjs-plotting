import Link from "next/link";
import paths from "@/app/paths";
import Navbar from "@/app/(components)/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar title="Dojo Helpdesk">
        <Link href={paths.dashboard}>Dashboard</Link>
        <Link href={paths.tickets}>Tickets</Link>
        <Link href={paths.createTicket}>Create tickets</Link>
        <Link href={paths.playground}>Playground</Link>
      </Navbar>
      {children}
    </>
  );
}
