import React from "react";
import DashboardAndTickets from "../components/DashboardAndTickets";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Page not found</h2>
      <p>Apologies, but we couldn&apos;t find the page you were looking for.</p>
      <DashboardAndTickets />
    </main>
  );
}
