"use client"; // บอกว่าเป็น Client Component

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-xl mb-4">Current Count: {count}</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </main>
  );
}
