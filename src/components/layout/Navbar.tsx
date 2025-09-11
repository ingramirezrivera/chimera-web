"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/#books", label: "Books" },
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function BrandLink({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link href="/" onClick={onClick} className="text-lg font-semibold">
      <span className="text-neutral-900 dark:text-white">Chimeral</span>
      <span className="text-emerald-600">insight</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:bg-neutral-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLink />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-sm md:hidden dark:border-neutral-700"
          aria-label="Open menu"
          title="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile menu in a portal so it fully covers the screen */}
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-white md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Top bar */}
              <div className="flex h-16 items-center justify-between border-b border-gray-200">
                <BrandLink onClick={() => setOpen(false)} />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-sm"
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <span className="sr-only">Close menu</span>
                  <div className="h-5 w-5">✕</div>
                </button>
              </div>

              {/* Centered links */}
              <nav className="flex flex-col items-center justify-center gap-6 py-10 text-center">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="w-full text-lg font-semibold"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
