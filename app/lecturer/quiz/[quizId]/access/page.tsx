// app/lecturer/quiz/[quizId]/access/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import LecturerShell from '../../../../../components/lecturer/LecturerShell';
import { apiGet, apiPost } from '../../../../../lib/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface AccessData {
  code?: string;
  url?: string;
}

export default function QuizAccessPage() {
  const params = useParams() as { quizId: string };
  const quizId = params.quizId;
  const [access, setAccess] = useState<AccessData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet(`/api/lecturer/quizzes/${quizId}/access`);
        setAccess(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [quizId]);

  async function generate() {
    try {
      const data = await apiPost(`/api/lecturer/quizzes/${quizId}/access`, {});
      setAccess(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <LecturerShell>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Access Code & Link</h1>
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
            href={`/lecturer/quiz/${quizId}/results`}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            Results
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <p className="text-sm text-gray-600">
          Share this code with students or use the URL below:
        </p>

        <div>
          <label className="block text-xs text-gray-500">Quiz Code</label>
          <div className="flex gap-2 mt-2 items-center">
            <div className="px-3 py-2 bg-gray-100 rounded">
              {access?.code || '—'}
            </div>
            <button
              onClick={generate}
              className="px-3 py-1 border rounded"
            >
              Generate New
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(access?.code || '')}
              className="px-3 py-1 border rounded"
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500">Access URL</label>
          <div className="mt-2 flex gap-2 items-center">
            <input
              readOnly
              value={access?.url || ''}
              className="flex-1 border rounded p-2"
            />
            <button
              onClick={() => navigator.clipboard.writeText(access?.url || '')}
              className="px-3 py-1 border rounded"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </LecturerShell>
  );
}

