import { db } from "@/lib/db";

export async function DELETE(request, { params }) {
  const id = params.id;
  await db.execute("DELETE FROM feedback WHERE id = ?", [id]);
  return Response.json({ success: true, id });
}

export async function PATCH(request, { params }) {
  const id = params.id;
  const { message } = await request.json();

  if (!message) {
    return Response.json({ success: false, error: "Message is required" }, { status: 400 });
  }

  await db.execute("UPDATE feedback SET message = ? WHERE id = ?", [message, id]);
  return Response.json({ success: true, id, message });
}
