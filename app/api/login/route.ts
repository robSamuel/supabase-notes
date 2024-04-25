import { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const { email, password } = await req.json();

  const { error, data: { user, session }, } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    //TODO: Remove this later
    console.error('Authentication error:', error.message);
    return NextResponse.json({ error: "Could not authenticate user" });
  }

  // TODO: exclude sensitive info from the response.
  return NextResponse.json({ message: "User authenticated successfully", user: user, session: session });
}
