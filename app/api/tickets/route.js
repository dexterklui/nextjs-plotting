import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import paths from "@/app/paths";

export const dynamic = "force-dynamic";

async function getSession(supabase) {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function POST(request) {
  const ticket = await request.json();
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const session = await getSession(supabase);

    if (!session) return NextResponse.redirect(paths.login);

    const { data, error } = await supabase
      .from("tickets")
      .insert({
        ...ticket,
        user_email: session.user.email,
      })
      .select()
      .single();

    return NextResponse.json({ data, error });
  } catch (error) {
    return new Response({ error: error.message }, { status: 500 });
  }
}
