import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Currently Open Tickets:</h2>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
