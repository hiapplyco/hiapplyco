
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const { name, email, message, source } = body;

    try {
      // Get Supabase URL from environment variables
      const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        console.error('Supabase configuration missing');
        // Fallback: Log the message
        console.log(`Contact form submission - Name: ${name}, Email: ${email}, Message: ${message}, Source: ${source || 'unknown'}`);
        
        return new Response(JSON.stringify({
          message: "Success! (Email service not configured, message logged)"
        }), {
          status: 200
        });
      }

      // Call Supabase Edge Function
      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source: source || 'hiapplyco-pricing',
          to: 'martin@hiapply.co',
          cc: 'james@hiapply.co'
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase function error:', errorText);
        throw new Error('Failed to send email');
      }

      return new Response(JSON.stringify({
        message: "Success!"
      }), {
        status: 200
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback: Log the submission
      console.log(`Contact form submission (failed to send email) - Name: ${name}, Email: ${email}, Message: ${message}`);
      
      return new Response(JSON.stringify({
        message: "Success! (Message received, we'll contact you soon)"
      }), {
        status: 200  // Return success to not break user experience
      });
    }
  }
  return new Response(null, { status: 400 });
}
