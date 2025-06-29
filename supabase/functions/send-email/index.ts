
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { corsHeaders } from '../_shared/cors.ts'

const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message, source } = await req.json()
    
    console.log('Received email request:', { name, email, message, source })
    
    if (!SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is not configured')
    }

    console.log('Sending email via SendGrid...')
    
    const emailData = {
      personalizations: [
        {
          to: [{ email: 'martin@hiapply.co' }],
          cc: [{ email: 'james@hiapply.co' }],
        },
      ],
      from: { email: 'noreply@hiapply.co', name: 'hiapply.co' },
      subject: `New Lead from ${name}`,
      content: [
        {
          type: 'text/plain',
          value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSource: ${source || 'Unknown'}`,
        },
      ],
    }
    
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    console.log('SendGrid response status:', res.status)
    
    // SendGrid returns 202 Accepted with empty body on success
    if (res.status === 202) {
      console.log('Email sent successfully')
      return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    }
    
    // If not 202, try to get error details
    const responseText = await res.text()
    console.log('SendGrid response:', responseText)
    
    if (!res.ok) {
      throw new Error(`SendGrid error: ${res.status} - ${responseText}`)
    }

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in send-email function:', error)
    return new Response(JSON.stringify({ 
      error: error.message,
      details: error.toString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
