import React from "react";
import Link from "next/link";

export default function GoToDashboard() {
  return (
    <div className="flex justify-center gap-2 my-5">
      <Link href="/">
        <button className="btn-primary">Go to Dashboard</button>
      </Link>
    </div>
  );
}
