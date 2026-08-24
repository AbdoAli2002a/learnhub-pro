import { useEffect, useRef, useState } from "react";

const ITEMS: { s: string; t: boolean }[] = [
  { s: "Every parallelogram is a quadrilateral.", t: true },
  { s: "Every trapezium is a parallelogram.", t: false },
  { s: "The interior angles of a quadrilateral total 360°.", t: true },
  { s: "In a parallelogram, consecutive angles are equal.", t: false },
  { s: "In a parallelogram, opposite sides are equal in length.", t: true },
  { s: "A trapezium has two pairs of parallel sides.", t: false },
  { s: "Diagonals of a parallelogram bisect each other.", t: true },
  { s: "A right trapezium contains a right angle.", t: true },
  { s: "Opposite angles of a parallelogram are supplementary.", t: false },
  { s: "One pair of sides equal and parallel proves a parallelogram.", t: true },
  { s: "An isosceles trapezium has equal non-parallel sides.", t: true },
  { s: "A quadrilateral can have interior angles summing to 400°.", t: false },
];

export function TrueFalseRush() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(45);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"" | "ok" | "no">("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [running]);

  function start() {
    setRunning(true);
    setTime(45);
    setI(0);
    setScore(0);
    setFlash("");
  }

  function answer(v: boolean) {
    if (!running) return;
    const ok = ITEMS[i % ITEMS.length].t === v;
    setScore((s) => (ok ? s + 1 : s));
    setFlash(ok ? "ok" : "no");
    setTimeout(() => setFlash(""), 250);
    setI((n) => n + 1);
  }

  if (!running && time === 45 && i === 0) {
    return (
      <div className="space-y-3 text-center">
        <p className="text-sm text-muted-foreground">
          45 seconds. How many true/false statements can you get right?
        </p>
        <button
          onClick={start}
          className="rounded-md bg-accent px-5 py-2 text-sm font-medium text-accent-foreground"
        >
          Start the rush
        </button>
      </div>
    );
  }

  if (!running) {
    return (
      <div className="space-y-3 text-center">
        <p className="font-display text-3xl">{score} correct</p>
        <p className="text-sm text-muted-foreground">Answered {i} statements in 45 seconds.</p>
        <button
          onClick={start}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>Time {time}s</span>
        <span>Score {score}</span>
      </div>
      <div
        className={`rounded-xl border-2 px-5 py-8 text-center text-base font-medium transition-colors ${
          flash === "ok" ? "border-success bg-success/10" : flash === "no" ? "border-destructive bg-destructive/10" : ""
        }`}
      >
        {ITEMS[i % ITEMS.length].s}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => answer(true)}
          className="rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
        >
          True
        </button>
        <button
          onClick={() => answer(false)}
          className="rounded-md border px-4 py-3 text-sm font-medium hover:bg-secondary"
        >
          False
        </button>
      </div>
    </div>
  );
}
