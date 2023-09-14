import React from "react";
import Link from "next/link";

export default function GoToTickets() {
  return (
    <div className="flex justify-center gap-2 my-5">
      <Link href="/tickets">
        <button className="btn-primary">View Tickets</button>
      </Link>
    </div>
  );
}
