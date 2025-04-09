"use client";
import { useState, useEffect } from "react";
import {
  getAllFeedbacks,
  deleteFeedback,
  updateFeedback,
} from "@/lib/feedback";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");

  useEffect(() => {
    getAllFeedbacks().then((data) => setFeedbacks(data.feedbacks));
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/feedback/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.success) {
      setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
    }
  };

  const handleEdit = (fb) => {
    setEditId(fb.id);
    setEditedMessage(fb.message);
  };

  const handleSave = async (id) => {
    const res = await fetch(`/api/feedback/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: editedMessage }),
    });

    const data = await res.json();

console.log(data);

    if (data.success) {
      setFeedbacks((prev) =>
        prev.map((fb) => (fb.id === id ? { ...fb, message: data.message } : fb))
      );
      
      
      setEditId(null);
      setEditedMessage("");
    }
  };

  return feedbacks.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
      <thead>
        <tr>
          <th className="border border-gray-300 dark:border-gray-600">Name</th>
          <th className="border border-gray-300 dark:border-gray-600">
            Message
          </th>
          <th className="border border-gray-300 dark:border-gray-600">
            created_at
          </th>
          <th className="border border-gray-300 dark:border-gray-600">Edit</th>
        </tr>
      </thead>

      <tbody>
        {feedbacks.map((fb) => (
          <tr key={fb.id}>
            <td className="border border-gray-300 dark:border-gray-700">
              {fb.name}
            </td>

            <td className="border border-gray-300 dark:border-gray-700">
              {editId === fb.id ? (
                <input
                  type="text"
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700"
                />
              ) : (
                fb.message
              )}
            </td>

            <td className="border border-gray-300 dark:border-gray-700">
              <small>{new Date(fb.created_at).toLocaleString()}</small>
            </td>

            <td className="border border-gray-300 dark:border-gray-700">
              {editId === fb.id ? (
                <button
                  onClick={() => handleSave(fb.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(fb)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              )}
            </td>

              <td className="border border-gray-300 dark:border-gray-700">
                <button onClick={() => handleDelete(fb.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
