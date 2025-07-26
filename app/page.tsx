import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          <Sparkles className="text-purple-500 w-10 h-10 animate-pulse" />
          Welcome to TaskFlow
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Organize your thoughts, focus your energy, and conquer your day.
        </p>
        <Link href="/profile">
          <button className="text-lg px-6 py-4 rounded-2xl shadow-md inset-shadow-xs hover:scale-105 transition">
            Get Started with Your To-Do List
          </button>
        </Link>
      </div>
    </div>
  );
}
