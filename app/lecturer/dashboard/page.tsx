// app/lecturer/dashboard/page.tsx
import React from 'react';
import LecturerShell from '../../../components/lecturer/LecturerShell';
import Link from 'next/link';
import { apiGet } from '../../../lib/api';

interface Quiz {
  id: string;
  title: string;
  studentsCount?: number;
  status?: string;
}

export default async function LecturerDashboardPage() {
  // server fetch: list of quizzes by lecturer
  let quizzes: Quiz[] = [];
  try {
    quizzes = await apiGet('/api/lecturer/quizzes'); // returns [{id, title, studentsCount, status}, ...]
  } catch (e) {
    console.error(e);
  }

  return (
    <LecturerShell>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          href="/lecturer/create-quiz"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create New Quiz
        </Link>
      </div>

      <div className="grid gap-4">
        {quizzes.length === 0 ? (
          <div className="p-6 bg-white border rounded">You have no quizzes yet.</div>
        ) : (
          quizzes.map((q: Quiz) => (
            <div
              key={q.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{q.title}</h3>
                <p className="text-sm text-gray-500">
                  {q.studentsCount || 0} participants • {q.status}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/lecturer/quiz/${q.id}/edit`}
                  className="px-3 py-1 border rounded"
                >
                  Edit
                </Link>
                <Link
                  href={`/lecturer/quiz/${q.id}/access`}
                  className="px-3 py-1 border rounded"
                >
                  Access
                </Link>
                <Link
                  href={`/lecturer/quiz/${q.id}/results`}
                  className="px-3 py-1 border rounded"
                >
                  Results
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </LecturerShell>
  );
}

