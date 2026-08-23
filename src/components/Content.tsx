import { useState, type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="border-b bg-secondary/50 grid-paper">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{intro}</p>
      </div>
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-10 border-b last:border-b-0">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5 space-y-5 leading-relaxed">{children}</div>
    </section>
  );
}

export function Rule({ children }: { children: ReactNode }) {
  return <div className="rule-box rounded-r-lg px-5 py-4 text-lg font-medium">{children}</div>;
}

export function Note({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed bg-muted/60 px-5 py-4 text-sm">
      {title ? <p className="font-semibold">{title}</p> : null}
      <div className="mt-1 text-muted-foreground">{children}</div>
    </div>
  );
}

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-2 font-mono text-sm">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-accent-foreground/70">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function ExampleCard({
  n,
  prompt,
  figure,
  solution,
}: {
  n: number | string;
  prompt: ReactNode;
  figure?: ReactNode;
  solution: ReactNode;
}) {
  return (
    <article className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-primary px-2 py-0.5 font-mono text-xs text-primary-foreground">
          Example {n}
        </span>
      </div>
      <div className="mt-3 grid gap-5 md:grid-cols-2">
        <div>
          <div className="text-sm">{prompt}</div>
          <div className="mt-4 space-y-3 text-sm">
            <p className="font-semibold">Solution</p>
            {solution}
          </div>
        </div>
        {figure ? <div>{figure}</div> : null}
      </div>
    </article>
  );
}

export function TryIt({
  n,
  prompt,
  figure,
  answer,
}: {
  n: number | string;
  prompt: ReactNode;
  figure?: ReactNode;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-xl border-2 border-dashed bg-background p-5">
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
          Try it yourself {n}
        </span>
      </div>
      <div className="mt-3 grid gap-5 md:grid-cols-2">
        <div className="text-sm">
          {prompt}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
          >
            {open ? "Hide answer" : "Show answer"}
          </button>
          {open ? <div className="mt-3 space-y-2 text-sm">{answer}</div> : null}
        </div>
        {figure ? <div>{figure}</div> : null}
      </div>
    </article>
  );
}
