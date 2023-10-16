import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// whether dyanmic params that do not match any generated static params should be accepted
// if false then 404 page is served
// default is true
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { data: ticket } = await getTicket(params.id);

  return {
    title: `Dojo Helpdesk | ${ticket?.title || "Ticket not found"}`,
  };
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (error) console.error(error.message);

  return { data, error };
}

export default async function TicketDetails({ params }) {
  const { data: ticket, error } = await getTicket(params.id);

  if (error) notFound();

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
