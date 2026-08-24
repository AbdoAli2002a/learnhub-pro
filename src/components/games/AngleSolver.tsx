import { useMemo, useState } from "react";
import { AngleQuadFigure } from "@/components/Figures";

function randomSet() {
  const a = 40 + Math.floor(Math.random() * 100);
  const b = 40 + Math.floor(Math.random() * 100);
  const c = 40 + Math.floor(Math.random() * Math.max(20, 250 - a - b));
  return { a, b, c, x: 360 - a - b - c };
}

export function AngleSolver() {
  const [round, setRound] = useState(0);
  const set = useMemo(() => randomSet(), [round]);
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "right" | "wrong">("idle");
  const [score, setScore] = useState(0);

  function check() {
    const n = Number(value);
    if (Number.isNaN(n) || value.trim() === "") return;
    if (n === set.x) {
      setState("right");
      setScore((s) => s + 1);
    } else {
      setState("wrong");
    }
  }

  function next() {
    setRound((r) => r + 1);
    setValue("");
    setState("idle");
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <AngleQuadFigure angles={[`${set.a}°`, `${set.b}°`, `${set.c}°`]} />
      <div className="space-y-4">
        <p className="text-sm">
          Three interior angles are <span className="font-mono">{set.a}°</span>,{" "}
          <span className="font-mono">{set.b}°</span> and <span className="font-mono">{set.c}°</span>.
          Find the missing angle <span className="font-mono">x</span>.
        </p>
        <div className="flex gap-2">
          <input
            inputMode="numeric"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setState("idle");
            }}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder="x = ?"
            className="w-32 rounded-md border bg-background px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={check}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Check
          </button>
          <button onClick={next} className="rounded-md border px-4 py-2 text-sm hover:bg-secondary">
            New figure
          </button>
        </div>
        {state === "right" ? (
          <p className="rounded-md bg-success px-3 py-2 text-sm text-success-foreground">
            Correct — 360 − ({set.a} + {set.b} + {set.c}) = {set.x}°
          </p>
        ) : null}
        {state === "wrong" ? (
          <p className="rounded-md bg-destructive px-3 py-2 text-sm text-destructive-foreground">
            Not yet. Remember the four angles must total 360°.
          </p>
        ) : null}
        <p className="font-mono text-xs text-muted-foreground">Score: {score}</p>
      </div>
    </div>
  );
}
