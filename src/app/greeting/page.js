"use client";

import { useState } from "react";

export default function GreetingPage() {
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(0);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Greeting</h1>

      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 mb-4 block"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="text-xl">
        {name ? `Hello, ${name}! 👋` : "Please enter your name"}
      </p>

        <p>Like: {liked > 10 ? `Wow Liked ${liked} Times!` : liked} !</p>
      <button onClick={() => setLiked(liked + 1)}>Like</button>
    </main>
  );
}
