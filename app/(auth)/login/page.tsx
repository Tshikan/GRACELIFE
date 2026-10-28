import Link from "next/link";
import { signIn } from "@/app/(auth)/actions";

const messages: Record<string, string> = {
  missing: "Enter your email and password.",
  credentials: "We couldn't sign you in with those details.",
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return (
    <main>
      <section className="card stack">
        <h1>Welcome back</h1>
        <p className="muted">Sign in to your GRACELIFE account.</p>
        {error && <p className="error" role="alert">{messages[error] ?? "Sign-in failed."}</p>}
        <form className="stack" action={signIn}>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
          <button type="submit">Sign in</button>
        </form>
        <p className="muted">New to GRACELIFE? <Link href="/signup">Create an account</Link></p>
      </section>
    </main>
  );
}
