import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('createdBy', user?.id);

    if(error) {
      console.log('error retrieving notes', error)
      return NextResponse.json(
        { message: 'Error fetching notes' },
        { status: 400 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log('error from try catch', error)
    return NextResponse.json(
      { message: 'Error fetching note.s' },
      { status: 400 }
    );
  }
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser(); 

    const { data, error } = await supabase
      .from('notes')
      .insert({
        text: 'the text',
        createdBy: user?.id
      });

    if(error) {
      console.log('error retrieving notes', error)
      return NextResponse.json(
        { message: 'Error fetching notes' },
        { status: 400 }
      );
    }

    return NextResponse.json({data}, { status: 200 })
  } catch (error) {
    console.log('error from try catch', error)
    return NextResponse.json(
      { message: 'Error trying to save the note.' },
      { status: 400 }
    );
  }
}
