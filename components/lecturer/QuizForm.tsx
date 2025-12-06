// components/lecturer/QuizForm.tsx
'use client';

import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuizForm({ onCreate }: { onCreate: (data: any) => Promise<void> }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questionSource, setQuestionSource] = useState<'text' | 'document' | 'image' | 'url'>('text');
  const [timeLimitType, setTimeLimitType] = useState<'perQuestion' | 'overall'>('overall');
  const [timeLimitSeconds, setTimeLimitSeconds] = useState<number>(3600);
  const [numQuestions, setNumQuestions] = useState<number>(10);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      title,
      description,
      questionSource,
      timeLimitType,
      timeLimitSeconds,
      numQuestions,
    };
    await onCreate(payload);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div>
        <label className="block text-sm font-medium">Quiz Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium">Source</label>
          <select
            value={questionSource}
            onChange={(e) =>
              setQuestionSource(e.target.value as 'text' | 'document' | 'image' | 'url')
            }
            className="mt-1 border rounded p-2"
          >
            <option value="text">TEXT</option>
            <option value="document">DOCUMENT</option>
            <option value="image">IMAGE</option>
            <option value="url">URL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Number of Questions</label>
          <input
            type="number"
            value={numQuestions}
            min={1}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="mt-1 border rounded p-2 w-32"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Time Limit (seconds)</label>
          <input
            type="number"
            value={timeLimitSeconds}
            min={10}
            onChange={(e) => setTimeLimitSeconds(Number(e.target.value))}
            className="mt-1 border rounded p-2 w-36"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Quiz
        </button>
      </div>
    </form>
  );
}

