import { useMemo, useState } from "react";

const STEPS = [
  "ABCD is a parallelogram (given) ∴ AB = DC",
  "AB = BH (given)",
  "∴ DC = BH",
  "AB ∥ CD and H ∈ ray AB ∴ BH ∥ DC",
  "BH = DC and BH ∥ DC (one pair both equal and parallel)",
  "∴ BHCD is a parallelogram",
];

function shuffled<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ProofBuilder() {
  const [seed, setSeed] = useState(0);
  const pool = useMemo(() => shuffled(STEPS), [seed]);
  const [order, setOrder] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const left = pool.filter((s) => !order.includes(s));

  return (
    <div className="space-y-4">
      <p className="text-sm">
        <strong>Prove:</strong> ABCD is a parallelogram and H lies on ray AB with AB = BH. Show that
        BHCD is a parallelogram. Tap the statements in the correct order.
      </p>

      <div className="flex flex-wrap gap-2">
        {left.map((s) => (
          <button
            key={s}
            onClick={() => {
              setOrder((o) => [...o, s]);
              setChecked(false);
            }}
            className="rounded-lg border bg-card px-3 py-2 text-left text-xs hover:border-primary"
          >
            {s}
          </button>
        ))}
      </div>

      <ol className="space-y-2">
        {order.map((s, i) => {
          const ok = STEPS[i] === s;
          return (
            <li
              key={s}
              className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-xs ${
                checked ? (ok ? "border-success bg-success/10" : "border-destructive bg-destructive/10") : ""
              }`}
            >
              <span>
                <span className="font-mono text-muted-foreground">{i + 1}. </span>
                {s}
              </span>
              <button
                onClick={() => {
                  setOrder((o) => o.filter((x) => x !== s));
                  setChecked(false);
                }}
                className="text-muted-foreground hover:text-destructive"
                aria-label="Remove step"
              >
                ×
              </button>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setChecked(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Check proof
        </button>
        <button
          onClick={() => {
            setOrder([]);
            setChecked(false);
            setSeed((s) => s + 1);
          }}
          className="rounded-md border px-4 py-2 text-sm hover:bg-secondary"
        >
          Shuffle & restart
        </button>
        {checked && order.length === STEPS.length && order.every((s, i) => s === STEPS[i]) ? (
          <span className="text-sm font-medium text-success">Proof complete and correct.</span>
        ) : null}
      </div>
    </div>
  );
}
