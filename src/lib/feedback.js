// lib/feedback.js

export async function postFeedback(data) {
  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getAllFeedbacks() {
  const res = await fetch("/api/feedback");
  return res.json();
}

export async function deleteFeedback(id) {
  const res = await fetch(`/api/feedback/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function updateFeedback(id, message) {
  const res = await fetch(`/api/feedback/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
}