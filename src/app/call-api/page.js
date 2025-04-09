"use client";
import { useEffect, useState } from "react";

export default function CallApiPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
        fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => setData(json));
    }, 1000);

    return () => {
        clearInterval(timer);
    }
    
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Calling API</h1>
      {data ? (
        <div>
          <p className="mb-2">Message: {data.message}</p>
          <p>Time: {data.time}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
