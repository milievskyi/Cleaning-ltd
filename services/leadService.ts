import { LeadFormData, LeadSubmissionResult } from "@/types";

// TODO: Activate by adding to .env.local:
//   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
//
// Then create a "leads" table in Supabase with columns:
//   id (uuid, primary key), name (text), phone (text),
//   service_type (text), home_size (text), message (text),
//   created_at (timestamptz, default now())

export async function submitLead(
  data: LeadFormData
): Promise<LeadSubmissionResult> {
  // --- STUB: Replace with live Supabase call when ready ---
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // );
  // const { error } = await supabase.from("leads").insert([{
  //   name: data.name,
  //   phone: data.phone,
  //   service_type: data.serviceType,
  //   home_size: data.homeSize,
  //   message: data.message ?? "",
  // }]);
  // if (error) return { success: false, error: error.message };
  // return { success: true };

  // Simulated network delay for UI testing
  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.log("[leadService] Lead submitted (stub mode):", data);
  return { success: true };
}
