import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

async function streamToString(stream: any) {
  const chunks = [];
  
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  
  return Buffer.concat(chunks).toString('utf8');
}

export async function POST(req: NextApiRequest) {
  const supabase = createClient();

  const dataT = await streamToString(req.body);
  const { email, password } = JSON.parse(dataT);

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
