"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import paths from "../paths";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.refresh();
      router.push(paths.login);
    } else {
      console.log(error);
    }
  };

  return (
    <button className="btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
}
