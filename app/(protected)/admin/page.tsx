import { requireAdmin } from "@/lib/auth/guards";

export default async function AdminPage() {
  await requireAdmin();
  return (
    <main className="page">
      <p className="muted">GRACELIFE OPERATIONS</p>
      <h1>Administration</h1>
      <p className="muted">This protected area is ready for catalogue, inventory, and order tools.</p>
    </main>
  );
}
