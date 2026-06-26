import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, state, lga, occupation, interest } = body;

    // 1. Persist supporter entity securely into Supabase Engine Datastore
    const { data, error } = await supabase
      .from('supporters')
      .insert([{ name, email, whatsapp, state, lga, occupation, interest }])
      .select()
      .single();

    if (error) throw error;

    // 2. Automated Handshake Trigger with internal WhatsApp Pipeline
    // This executes an internal post dispatch triggering your future chatbot engine sequence loop
    try {
      await fetch(`${new URL(request.url).origin}/api/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: whatsapp,
          template: 'campaign_welcome_optin',
          variables: [name]
        })
      });
    } catch (triggerError) {
      console.error("WhatsApp system outbound automation sequence delayed processing: ", triggerError);
    }

    return NextResponse.json({ success: true, entry: data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}