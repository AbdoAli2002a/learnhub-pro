import { useState } from "react";

type Q = { q: string; options: string[]; answer: number; why: string };

const QUESTIONS: Q[] = [
  {
    q: "The sum of the interior angles of any quadrilateral equals:",
    options: ["180°", "270°", "360°", "540°"],
    answer: 2,
    why: "A diagonal splits it into two triangles: 180° + 180° = 360°.",
  },
  {
    q: "A quadrilateral with only two parallel sides is called a:",
    options: ["Parallelogram", "Trapezium", "Rhombus", "Kite"],
    answer: 1,
    why: "Only one pair of parallel sides defines a trapezium.",
  },
  {
    q: "In parallelogram ABCD, if m(∠A) + m(∠C) = 140°, then m(∠B) equals:",
    options: ["70°", "40°", "110°", "220°"],
    answer: 2,
    why: "Opposite angles are equal so m(∠A) = 70°; consecutive angles give 180 − 70 = 110°.",
  },
  {
    q: "In a parallelogram, the diagonals:",
    options: [
      "are always equal",
      "bisect each other",
      "are perpendicular",
      "bisect the angles",
    ],
    answer: 1,
    why: "Bisecting each other is the diagonal property of every parallelogram.",
  },
  {
    q: "A trapezium in which the non-parallel sides are equal is called:",
    options: ["Right trapezium", "Isosceles trapezium", "Square", "Parallelogram"],
    answer: 1,
    why: "Equal non-parallel sides make it isosceles.",
  },
  {
    q: "Which of these is NOT enough to prove a quadrilateral is a parallelogram?",
    options: [
      "Diagonals bisect each other",
      "Opposite angles are equal",
      "One pair of sides is parallel",
      "One pair of sides is parallel and equal",
    ],
    answer: 2,
    why: "One parallel pair alone only gives a trapezium.",
  },
  {
    q: "Three angles of a quadrilateral are 80°, 120° and 70°. The fourth is:",
    options: ["70", "80", "90", "120"],
    answer: 2,
    why: "360 − (80 + 120 + 70) = 90°.",
  },
  {
    q: "In a right trapezium, how many right angles are there?",
    options: ["One", "Two", "Three", "Four"],
    answer: 1,
    why: "Co-interior angles are supplementary, so a right angle forces a second one.",
  },
];

export function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = QUESTIONS[i]!;

  function pick(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (i + 1 >= QUESTIONS.length) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
  }

  function restart() {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="space-y-3 text-center">
        <p className="font-display text-3xl">
          {score} / {QUESTIONS.length}
        </p>
        <p className="text-sm text-muted-foreground">
          {score === QUESTIONS.length
            ? "Perfect — you have mastered the lesson."
            : score >= QUESTIONS.length - 2
              ? "Strong work. Review the ones you missed."
              : "Go back over the properties and try again."}
        </p>
        <button
          onClick={restart}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Play again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>
          Question {i + 1} of {QUESTIONS.length}
        </span>
        <span>Score {score}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary">
        <div
          className="h-1.5 rounded-full bg-accent transition-all"
          style={{ width: `${((i + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <p className="text-base font-medium">{q.q}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {q.options.map((o, idx) => {
          const isAnswer = idx === q.answer;
          const chosen = picked === idx;
          const cls =
            picked === null
              ? "border hover:border-primary"
              : isAnswer
                ? "border-2 border-success bg-success/10"
                : chosen
                  ? "border-2 border-destructive bg-destructive/10"
                  : "border opacity-60";
          return (
            <button
              key={o}
              onClick={() => pick(idx)}
              className={`rounded-lg px-4 py-3 text-left text-sm transition-colors ${cls}`}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {"abcd"[idx]})&nbsp;
              </span>
              {o}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-muted px-4 py-3 text-sm">
          <span className="text-muted-foreground">{q.why}</span>
          <button
            onClick={next}
            className="rounded-md bg-primary px-4 py-1.5 text-sm text-primary-foreground"
          >
            {i + 1 === QUESTIONS.length ? "See result" : "Next"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
