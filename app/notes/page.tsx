import { redirect } from "next/navigation";
import NotesList from "@/components/Notes/NotesList";
import { createClient } from "@/utils/supabase/server";

export default async function Notes()  {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  
  return <NotesList />
}
