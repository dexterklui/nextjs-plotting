"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import paths from "@/app/paths";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    const url = new URL(`${paths.apiTickets}/${id}`, location.origin);
    const res = await fetch(url.toString(), { method: "DELETE" });
    const { error } = await res.json();

    if (error) {
      console.error(error.message);
      setIsLoading(false);
    } else {
      router.refresh();
      router.push(paths.tickets);
    }
  };

  return (
    <button className="btn-primary" onClick={handleDelete} disabled={isLoading}>
      <TiDelete />
      {isLoading ? "Deleting..." : "Delete Ticket"}
    </button>
  );
}
