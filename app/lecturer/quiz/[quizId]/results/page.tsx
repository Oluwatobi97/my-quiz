// app/lecturer/quiz/[quizId]/results/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import LecturerShell from '../../../../components/lecturer/LecturerShell';
import { apiGet } from '../../../../lib/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface QuizResult {
  id: string;
  studentName: string;
  ip: string;
  score: number;
  timeTaken: string;
}

export default function QuizResultsPage() {
  const params = useParams() as { quizId: string };
  const quizId = params.quizId;
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet(`/api/lecturer/quizzes/${quizId}/results`);
        setResults(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [quizId]);

  function exportCSV() {
    const header = ['Name', 'IP', 'Score', 'TimeTaken'];
    const rows = results.map((r: QuizResult) => [
      r.studentName,
      r.ip,
      r.score,
      r.timeTaken,
    ]);
    const csv = [header, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-${quizId}-results.csv`;
    a.click();
  }

  return (
    <LecturerShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Results</h1>
        <div className="flex gap-2">
          <Link
            href="/lecturer/dashboard"
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            ← Dashboard
          </Link>
          <Link
            href={`/lecturer/quiz/${quizId}/edit`}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            Edit Quiz
          </Link>
          <Link
            href={`/lecturer/quiz/${quizId}/access`}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            Access Code
          </Link>
          <button onClick={exportCSV} className="px-3 py-1 border rounded hover:bg-gray-50">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">IP</th>
              <th className="p-3 text-left">Score</th>
              <th className="p-3 text-left">Time Taken</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td className="p-4">No result yet</td>
              </tr>
            ) : (
              results.map((r: QuizResult) => (
                <tr key={r.id} className="border-t">
                  <td className="p-3">{r.studentName}</td>
                  <td className="p-3">{r.ip}</td>
                  <td className="p-3">{r.score}</td>
                  <td className="p-3">{r.timeTaken}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </LecturerShell>
  );
}

