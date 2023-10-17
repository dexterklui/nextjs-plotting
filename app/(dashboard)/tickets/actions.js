"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

import paths from "@/app/paths";

export async function addTicket(formData) {
  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return;

  // insert the data
  const { error } = await supabase.from("tickets").insert({
    title: formData.get("title"),
    body: formData.get("body"),
    priority: formData.get("priority"),
    user_email: session.user.email,
  });

  if (error) {
    console.log(error.message);
  } else {
    revalidatePath(paths.tickets);
    redirect(paths.tickets);
  }
}
