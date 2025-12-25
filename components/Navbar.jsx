"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <Link href="/">SHIVANSH</Link>
      </div>
      <div className="right">
        <Link href="/work">work</Link>
        <Link href="/resume">resume</Link>
        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
}
