export async function GET(request) {

  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "stranger";

    return Response.json({
      message: `Hello, ${name}!`,
      time: new Date().toISOString(),
    });
  }
  