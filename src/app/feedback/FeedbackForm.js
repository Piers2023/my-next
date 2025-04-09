"use client";
import { useState } from "react";
import { postFeedback } from "@/lib/feedback";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    const data = await res.json();

    if (data.success) {
      // เพิ่ม feedback ใหม่เข้า state ทันที
      setFeedbacks((prev) => [
        {
          id: data.id, // จาก API
          name: name,
          message: message,
          created_at: new Date().toISOString(), // ใช้เวลาปัจจุบัน
        },
        ...prev, // feedback ใหม่อยู่บนสุด
      ]);

      setName("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your message"
        className="w-full p-2 border rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
