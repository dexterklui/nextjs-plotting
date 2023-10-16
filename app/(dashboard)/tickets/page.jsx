import { Suspense } from "react";
import Link from "next/link";

import paths from "@/app/paths";
import TicketList from "./TicketList";
import Loading from "@/app/loading";

export const metadata = {
  title: "Dojo Helpdesk | Tickets",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <Link className="ml-auto" href={paths.createTicket}>
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
