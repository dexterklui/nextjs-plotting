import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

import paths from "@/app/paths";
import Navbar from "@/app/_components/Navbar";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data?.session) redirect(paths.login);

  const user = data?.session?.user;

  return (
    <>
      <Navbar title="Dojo Helpdesk" user={user}>
        <Link href={paths.dashboard}>Dashboard</Link>
        <Link href={paths.tickets}>Tickets</Link>
        <Link href={paths.playground}>Playground</Link>
      </Navbar>
      {children}
    </>
  );
}
