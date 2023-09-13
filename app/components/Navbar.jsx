import React from "react";
import Link from "next/link";
import Logo from "./logofinal.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="TicketEase logo "
        width={100}
        quality={100}
        placeholder="blur"
      />
      <h1>Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
