import { db } from "@/lib/db";

export async function POST(request) {
    const { name, message } = await request.json();
  
    const [result] = await db.execute(
      "INSERT INTO feedback (name, message, created_at) VALUES (?, ?, NOW())",
      [name, message]
    );
  
    return Response.json({
      success: true,
      id: result.insertId,
      data: {
        name,
        message,
        receivedAt: new Date().toISOString(),
      },
    });
  }
  
  export async function GET() {
    const [rows] = await db.execute("SELECT * FROM feedback ORDER BY created_at DESC");
    return Response.json({ feedbacks: rows });
  }