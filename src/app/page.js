"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
    
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Welcome to My Next.js App 🚀</h1>
      <p>This is the homepage.</p>
      <Link href="/about" className="text-blue-500 underline mt-4 block">
        Go to About Page
      </Link>

      <h1 className="text-2xl font-bold">Welcome to Server Component</h1>
      <p>Current server time: {time}</p>
    </main>
  );
}
