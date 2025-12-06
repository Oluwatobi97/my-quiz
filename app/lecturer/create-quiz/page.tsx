// app/lecturer/create-quiz/page.tsx
'use client';

import React from 'react';
import LecturerShell from '../../../components/lecturer/LecturerShell';
import QuizForm from '../../../components/lecturer/QuizForm';
import { apiPost } from '../../../lib/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CreateQuizPage() {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleCreate(payload: any) {
    try {
      const created = await apiPost('/api/lecturer/quizzes', payload);
      // created should include id
      router.push(`/lecturer/quiz/${created.id}/edit`);
    } catch (e) {
      const error = e instanceof Error ? e.message : String(e);
      alert('Failed to create quiz: ' + error);
    }
  }

  return (
    <LecturerShell>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Create Quiz</h1>
        <Link
          href="/lecturer/dashboard"
          className="px-3 py-1 border rounded hover:bg-gray-50"
        >
          ← Dashboard
        </Link>
      </div>
      <QuizForm onCreate={handleCreate} />
    </LecturerShell>
  );
}

