
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would typically send an email using a service like SendGrid
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    return new Response(JSON.stringify({
      message: "Success!"
    }), {
      status: 200
    });
  }
  return new Response(null, { status: 400 });
}
