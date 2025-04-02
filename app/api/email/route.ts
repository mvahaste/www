export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  const formEndpoint = process.env.FORM_ENDPOINT;

  if (!formEndpoint) {
    return new Response("Form endpoint not set", { status: 500 });
  }

  const response = await fetch(formEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    console.error(response.statusText);

    return new Response("Failed to send message", { status: 500 });
  }

  return new Response("Message sent", { status: 200 });
}
