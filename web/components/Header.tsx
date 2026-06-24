"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/90 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between py-4">
        <Logo />

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-copper ${
                item.label.startsWith("/") ? "text-copper" : "text-espresso/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary px-5 py-2.5 text-sm">
            Contact
          </Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-espresso md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation mobile */}
      {open && (
        <nav className="border-t border-espresso/10 bg-cream md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium hover:bg-ivory hover:text-copper ${
                  item.label.startsWith("/") ? "text-copper" : "text-espresso/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
