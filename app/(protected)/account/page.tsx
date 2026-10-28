import { requireUser } from "@/lib/auth/guards";

export default async function AccountPage() {
  const { supabase, userId } = await requireUser();
  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", userId).maybeSingle();
  return (
    <main className="page">
      <p className="muted">YOUR GRACELIFE ACCOUNT</p>
      <h1>Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}.</h1>
      <p className="muted">Your account is ready. Order history and profile settings will be added with the commerce phase.</p>
    </main>
  );
}
