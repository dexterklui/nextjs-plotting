import { notFound } from "next/navigation";

// whether dyanmic params that do not match any generated static params should be accepted
// if false then 404 page is served
// default is true
export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

export async function generateMetadata({ params }) {
  const ticket = await getTicket(params.id);
  return {
    title: `Dojo Helpdesk | ${ticket.title}`,
  };
}

async function getTicket(id) {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  console.log("TicketDetails params ids:", params);
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
