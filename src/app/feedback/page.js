"use client";
import { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

export default function FeedbackPage() {
  
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📮 Send Feedback</h1>

      <FeedbackForm />

      <hr className="my-6" />

      {/* {response && (
        <div className="mt-6 p-4 border rounded bg-green-50">
          <p>✅ Success: {response.success.toString()}</p>
          <p>👤 Name: {response.data.name}</p>
          <p>💬 Message: {response.data.message}</p>
          <p>🕒 At: {response.data.receivedAt}</p>
          <p> {response.feedbacks} </p>
        </div>
      )} */}

      <FeedbackList />
    </main>
  );
}
