// app/lecturer/quiz/[quizId]/edit/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import LecturerShell from '../../../../components/lecturer/LecturerShell';
import QuestionEditor, { Question } from '../../../../components/lecturer/QuestionEditor';
import { apiGet, apiPost, apiPut } from '../../../../lib/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Quiz {
  id: string;
  title: string;
  questions?: Question[];
}

export default function QuizEditPage() {
  const params = useParams() as { quizId: string };
  const quizId = params.quizId;
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet(`/api/lecturer/quizzes/${quizId}`);
        setQuiz(data);
        setQuestions(data.questions || []);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [quizId]);

  function handleQuestionChange(index: number, q: Question) {
    const next = [...questions];
    next[index] = q;
    setQuestions(next);
  }

  async function addQuestion() {
    const newQ: Question = {
      text: '',
      type: 'mcq',
      options: ['', '', '', ''],
      correctIndex: 0,
    };
    try {
      const created = await apiPost(`/api/lecturer/quizzes/${quizId}/questions`, newQ);
      setQuestions((prev) => [...prev, created]);
    } catch (e) {
      const error = e instanceof Error ? e.message : String(e);
      alert('Failed to add question: ' + error);
    }
  }

  async function saveQuestion(index: number) {
    const q = questions[index];
    if (!q.id) {
      alert('Question must have an ID to save');
      return;
    }
    try {
      await apiPut(`/api/lecturer/quizzes/${quizId}/questions/${q.id}`, q);
      alert('Saved');
    } catch (e) {
      const error = e instanceof Error ? e.message : String(e);
      alert('Failed to save question: ' + error);
    }
  }

  return (
    <LecturerShell>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {quiz?.title || 'Quiz'} — Edit Questions
        </h1>
        <div className="flex gap-2">
          <Link
            href="/lecturer/dashboard"
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            ← Dashboard
          </Link>
          <Link
            href={`/lecturer/quiz/${quizId}/access`}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            Access Code
          </Link>
          <Link
            href={`/lecturer/quiz/${quizId}/results`}
            className="px-3 py-1 border rounded hover:bg-gray-50"
          >
            Results
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={q.id || idx} className="bg-white p-4 rounded">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Question {idx + 1}</h3>
              <div>
                <button
                  onClick={() => saveQuestion(idx)}
                  className="mr-2 px-3 py-1 border rounded"
                >
                  Save
                </button>
              </div>
            </div>

            <QuestionEditor
              value={q}
              onChange={(next) => handleQuestionChange(idx, next)}
            />
          </div>
        ))}

        <div className="pt-4">
          <button
            onClick={addQuestion}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Question
          </button>
        </div>
      </div>
    </LecturerShell>
  );
}

