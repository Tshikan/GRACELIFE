import Link from "next/link";
import { signUp } from "@/app/(auth)/actions";

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ error?: string; sent?: string }> }) {
  const { error, sent } = await searchParams;
  return (
    <main>
      <section className="card stack">
        <h1>Create your account</h1>
        <p className="muted">One account for your GRACELIFE orders and updates.</p>
        {sent && <p className="notice" role="status">Check your email to confirm your account.</p>}
        {error && <p className="error" role="alert">{error === "validation" ? "Use a valid email and a password with at least 12 characters." : "We couldn't create the account. Check your details and try again."}</p>}
        <form className="stack" action={signUp}>
          <label>Name<input name="full_name" autoComplete="name" maxLength={120} /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Password<input name="password" type="password" autoComplete="new-password" minLength={12} required /></label>
          <button type="submit">Create account</button>
        </form>
        <p className="muted">Already registered? <Link href="/login">Sign in</Link></p>
      </section>
    </main>
  );
}
