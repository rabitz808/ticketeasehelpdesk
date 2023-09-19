import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Help Desk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
