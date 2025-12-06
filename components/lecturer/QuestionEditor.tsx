// components/lecturer/QuestionEditor.tsx
"use client";

import React from "react";

export type Question = {
  id?: string;
  text: string;
  type: "mcq" | "short" | "truefalse";
  options?: string[]; // for mcq
  correctIndex?: number;
};

export default function QuestionEditor({
  value,
  onChange,
}: {
  value?: Question;
  onChange: (q: Question) => void;
}) {
  const defaultQuestion: Question = {
    text: "",
    type: "mcq",
    options: ["", "", "", ""],
    correctIndex: 0,
  };

  // Use value prop if provided (controlled), otherwise use default
  const currentQ = value ?? defaultQuestion;

  function update(partial: Partial<Question>) {
    const next = { ...currentQ, ...partial };
    onChange(next);
  }

  return (
    <div className="space-y-3 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium">Question</label>
        <input
          value={currentQ.text}
          onChange={(e) => update({ text: e.target.value })}
          className="mt-1 w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Type</label>
        <select
          value={currentQ.type}
          onChange={(e) =>
            update({ type: e.target.value as "mcq" | "short" | "truefalse" })
          }
          className="mt-1 border rounded p-2"
        >
          <option value="mcq">Multiple Choice</option>
          <option value="short">Short Answer</option>
          <option value="truefalse">True / False</option>
        </select>
      </div>
      {currentQ.type === "mcq" && (
        <div>
          <label className="block text-sm font-medium">Options</label>
          <div className="space-y-2 mt-2">
            {(currentQ.options || []).map((opt, i) => (
              <div className="flex items-center gap-2" key={i}>
                <input
                  className="border rounded p-2 flex-1"
                  value={opt}
                  onChange={(e) => {
                    const newOpts = [...(currentQ.options || [])];
                    newOpts[i] = e.target.value;
                    update({ options: newOpts });
                  }}
                />
                <label className="text-sm">
                  {" "}
                  <input
                    type="radio"
                    checked={currentQ.correctIndex === i}
                    onChange={() => update({ correctIndex: i })}
                  />{" "}
                  correct
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
