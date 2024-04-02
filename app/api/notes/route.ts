import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('notes')
    .select('*');

  if(error) {
    console.log('error retrieving notes', error)
    return NextResponse.json({ message: 'Error fetching notes' }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
