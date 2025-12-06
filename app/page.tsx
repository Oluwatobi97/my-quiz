import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-12">
      <header className="w-full max-w-6xl flex justify-between items-center py-4">
        <Link href="/" className="text-3xl font-semibold hover:text-blue-600">
          Magic Quiz
        </Link>
        <nav className="flex items-center gap-6 text-lg">
          <Link href="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-xl border border-black hover:bg-gray-50"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="w-full max-w-4xl text-center mt-12">
        <h2 className="text-4xl font-bold">Create Quiz With AI</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Create powerful quizzes from any topic, PDF, URL, YouTube link, or
          text.
        </p>

        <div className="flex justify-center mt-8 gap-3">
          <button className="px-4 py-2 border rounded-lg">TEXT</button>
          <button className="px-4 py-2 border rounded-lg">DOCUMENT</button>
          <button className="px-4 py-2 border rounded-lg">IMAGE</button>
          <button className="px-4 py-2 border rounded-lg">URL</button>
        </div>

        <div className="mt-6 border-2 border-dashed border-gray-400 rounded-xl p-6 h-48">
          <p className="text-gray-500">
            Enter topic, YouTube URL, PDF, or text to generate quiz.
          </p>
        </div>

        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
          Generate Quiz
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <select className="border p-2 rounded-lg">
            <option>Multi Choice</option>
          </select>
          <select className="border p-2 rounded-lg">
            <option>English</option>
          </select>
          <select className="border p-2 rounded-lg">
            <option>Medium</option>
          </select>
          <select className="border p-2 rounded-lg">
            <option>Auto</option>
          </select>
        </div>

        <div className="mt-12 text-xl italic text-gray-700">
          Education is the passport to the future, for tomorrow belongs to those
          who prepare for it today.&quot; Malcolm X
        </div>
        <div className="mt-4 text-lg text-gray-600 italic">
          The beautiful thing about learning is that no one can take it away
          from you.&quot; B.B. King
        </div>
      </main>
    </div>
  );
}
