// components/lecturer/LecturerShell.tsx
'use client';

import React from 'react';
import Link from 'next/link';

// Note: Install next-auth to use signOut: npm install next-auth
// Then uncomment the import below
// import { signOut } from 'next-auth/react';

export default function LecturerShell({ children }: { children: React.ReactNode }) {
  const handleSignOut = () => {
    // TODO: Implement sign out when next-auth is configured
    // signOut();
    alert('Sign out functionality requires next-auth setup');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/lecturer/dashboard">
            <h2 className="text-xl font-semibold hover:text-blue-600 cursor-pointer">
              Lecturer Panel
            </h2>
          </Link>
          <nav className="flex gap-4 items-center">
            <Link
              href="/lecturer/dashboard"
              className="hover:underline hover:text-blue-600"
            >
              Dashboard
            </Link>
            <Link
              href="/lecturer/create-quiz"
              className="hover:underline hover:text-blue-600"
            >
              Create Quiz
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Sign out
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}

