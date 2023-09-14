import React from "react";
import Link from "next/link";

export default function DashboardAndTickets() {
  return (
    <div className="flex justify-center gap-2 my-5">
      <Link href="/">
        <button className="btn-primary">Go to Dashboard</button>
      </Link>
      <Link href="/tickets">
        <button className="btn-primary">View Tickets</button>
      </Link>
    </div>
  );
}
