import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AppRole = "customer" | "admin";

export async function requireUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;

  if (error || !userId) redirect("/login");
  return { supabase, userId };
}

export async function requireAdmin() {
  const { supabase, userId } = await requireUser();
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  if (error || profile?.role !== "admin") redirect("/account");
  return { supabase, userId };
}
