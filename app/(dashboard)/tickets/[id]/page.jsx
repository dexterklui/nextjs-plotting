import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import DeleteButton from "./DeleteButton";

// whether dyanmic params that do not match any generated static params should be accepted
// if false then 404 page is served
// default is true (the following setting is just making it explicit)
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
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  if (error) console.error(error.message);

  return { data, error };
}

export default async function TicketDetails({ params }) {
  const id = params.id;
  const { data: ticket, error } = await getTicket(id);

  if (error) notFound();

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {session.user.email === ticket.user_email && <DeleteButton id={id} />}
        </div>
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
