"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function signIn(formData: FormData) {
  const email = field(formData, "email").trim();
  const password = field(formData, "password");
  if (!email || !password) redirect("/login?error=missing");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/login?error=credentials");
  redirect("/account");
}

export async function signUp(formData: FormData) {
  const email = field(formData, "email").trim();
  const password = field(formData, "password");
  const fullName = field(formData, "full_name").trim();
  if (!email || password.length < 12) redirect("/signup?error=validation");

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/confirm`,
    },
  });
  if (error) redirect("/signup?error=signup");
  if (data.session) redirect("/account");
  redirect("/signup?sent=1");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
