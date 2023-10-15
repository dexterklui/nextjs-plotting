import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

import paths from "../paths";
import Navbar from "../_components/Navbar";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) redirect(paths.home);

  return (
    <>
      <Navbar title="Dojo Helpdesk">
        <Link href={paths.signup}>Sign up</Link>
        <Link href={paths.login}>Log in</Link>
      </Navbar>
      {children}
    </>
  );
}
