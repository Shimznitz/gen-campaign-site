import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Verify incoming object structure is a valid WhatsApp update payload
    if (payload.object === 'whatsapp_business_account') {
      const entry = payload.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const messageObj = value?.messages?.[0];

      if (messageObj) {
        const supporterPhone = messageObj.from; // Phone sender token identity
        const incomingText = messageObj.text?.body?.trim().toLowerCase();

        console.log(`[Chatbot Inbound Processor] Message from ${supporterPhone}: "${incomingText}"`);

        // CHATBOT INTERACTION ROUTER
        // Match user's input words against simple campaign routing keywords
        if (incomingText === 'volunteer') {
          await supabase
            .from('supporters')
            .update({ interest: 'Volunteer' })
            .eq('whatsapp', supporterPhone);
            
          // Dispatch verification feedback loop downstream
          // await sendWhatsAppText(supporterPhone, "Thank you! Your profile status has been updated to Volunteer.");
        } 
        else if (incomingText === 'manifesto') {
          // await sendWhatsAppText(supporterPhone, "Read our platform matrix online at: https://candidate.org#manifestos");
        }
      }
    }

    return NextResponse.json({ status: 'EVENT_RECEIVED' }, { status: 200 });
  } catch (error: any) {
    console.error('[Webhook Fatal Exception Log]:', error.message);
    return NextResponse.json({ error: 'Internal Parsing Variance' }, { status: 500 });
  }
}