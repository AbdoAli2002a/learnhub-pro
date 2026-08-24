import { useState } from "react";

type Card = { id: string; text: string; group: "trapezium" | "parallelogram" | "both" };

const CARDS: Card[] = [
  { id: "c1", text: "Only one pair of parallel sides", group: "trapezium" },
  { id: "c2", text: "Two pairs of parallel sides", group: "parallelogram" },
  { id: "c3", text: "Diagonals bisect each other", group: "parallelogram" },
  { id: "c4", text: "Interior angles add to 360°", group: "both" },
  { id: "c5", text: "Opposite angles are equal", group: "parallelogram" },
  { id: "c6", text: "May have exactly two right angles", group: "trapezium" },
  { id: "c7", text: "Opposite sides are equal in length", group: "parallelogram" },
  { id: "c8", text: "Has four sides and four vertices", group: "both" },
  { id: "c9", text: "Can be isosceles", group: "trapezium" },
];

const GROUPS = [
  { key: "trapezium", label: "Trapezium only" },
  { key: "parallelogram", label: "Parallelogram only" },
  { key: "both", label: "Both shapes" },
] as const;

export function ShapeSorter() {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [dragId, setDragId] = useState<string | null>(null);

  const remaining = CARDS.filter((c) => !placed[c.id]);
  const correct = CARDS.filter((c) => placed[c.id] === c.group).length;

  function drop(group: string) {
    if (!dragId) return;
    setPlaced((p) => ({ ...p, [dragId]: group }));
    setDragId(null);
    setChecked(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Drag each statement (or tap a card then tap a box) into the correct column.
      </p>

      <div className="flex flex-wrap gap-2">
        {remaining.map((c) => (
          <button
            key={c.id}
            draggable
            onDragStart={() => setDragId(c.id)}
            onClick={() => setDragId(dragId === c.id ? null : c.id)}
            className={`cursor-grab rounded-lg border bg-card px-3 py-2 text-xs transition-colors ${
              dragId === c.id ? "border-accent ring-2 ring-accent" : ""
            }`}
          >
            {c.text}
          </button>
        ))}
        {remaining.length === 0 ? (
          <span className="text-xs text-muted-foreground">All cards placed.</span>
        ) : null}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {GROUPS.map((g) => (
          <div
            key={g.key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => drop(g.key)}
            onClick={() => drop(g.key)}
            className="min-h-32 rounded-xl border-2 border-dashed bg-muted/40 p-3"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {g.label}
            </p>
            <div className="mt-2 space-y-2">
              {CARDS.filter((c) => placed[c.id] === g.key).map((c) => {
                const ok = c.group === g.key;
                return (
                  <div
                    key={c.id}
                    className={`rounded-md px-3 py-2 text-xs ${
                      checked
                        ? ok
                          ? "bg-success/15 border border-success"
                          : "bg-destructive/15 border border-destructive"
                        : "bg-card border"
                    }`}
                  >
                    {c.text}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setChecked(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Check answers
        </button>
        <button
          onClick={() => {
            setPlaced({});
            setChecked(false);
          }}
          className="rounded-md border px-4 py-2 text-sm hover:bg-secondary"
        >
          Reset
        </button>
        {checked ? (
          <span className="font-mono text-sm">
            {correct} / {CARDS.length} correct
          </span>
        ) : null}
      </div>
    </div>
  );
}
