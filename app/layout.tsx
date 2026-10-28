import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRACELIFE — Carried by Grace",
  description: "Thoughtful apparel for every road that asks something of you. GRACELIFE — Carried by Grace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <Link className="brand" href="/">GRACELIFE</Link>
            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/#collections">Collections</Link>
              <Link href="/#about">Our story</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/account">Account ↗</Link>
            </nav>
          </header>
          {children}
          <footer className="footer"><span>GRACELIFE · CARRIED BY GRACE</span><span>LUSAKA, ZAMBIA</span></footer>
        </div>
      </body>
    </html>
  );
}
