import Link from "next/link";
import { signOut } from "@/app/(auth)/actions";
import { requireUser } from "@/lib/auth/guards";

export default async function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  await requireUser();
  return (
    <>
      <nav className="nav" aria-label="Account navigation">
        <div className="nav-links"><Link href="/account">My account</Link><Link href="/admin">Administration</Link></div>
        <form action={signOut}><button className="secondary" type="submit">Sign out</button></form>
      </nav>
      {children}
    </>
  );
}
