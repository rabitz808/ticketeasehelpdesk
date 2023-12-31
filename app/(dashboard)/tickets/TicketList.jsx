import Link from "next/link";
import GoToDashboard from "@/app/components/GoToDashboard";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
            <div key={ticket.id} className={`card my-5 ${ticket.priority}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          </Link>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are currently no open tickets...</p>
      )}
      <GoToDashboard />
    </>
  );
}
