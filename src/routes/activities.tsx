import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader, Section, Note } from "@/components/Content";
import { AngleSolver } from "@/components/games/AngleSolver";
import { Quiz } from "@/components/games/Quiz";
import { ShapeSorter } from "@/components/games/ShapeSorter";
import { ProofBuilder } from "@/components/games/ProofBuilder";
import { TrueFalseRush } from "@/components/games/TrueFalseRush";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Quadrilateral Activities, Practice and Learning Games" },
      {
        name: "description",
        content:
          "Practise quadrilaterals with an angle-sum solver, shape sorting, a multiple-choice quiz, a proof builder and a timed true/false rush.",
      },
      { property: "og:title", content: "Quadrilateral Activities and Learning Games" },
      {
        property: "og:description",
        content: "Five interactive activities to master quadrilaterals, trapeziums and parallelograms.",
      },
    ],
  }),
  component: Activities,
});

function GameCard({
  tag,
  title,
  goal,
  children,
}: {
  tag: string;
  title: string;
  goal: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-secondary-foreground">
          {tag}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{goal}</p>
      <div className="mt-6">{children}</div>
    </article>
  );
}

function Activities() {
  return (
    <>
      <PageHeader
        eyebrow="Section 5"
        title="Activities, Practice & Learning Games"
        intro="Five hands-on activities that turn the lesson into practice: compute missing angles, sort properties, answer exam-style questions, rebuild a proof, and beat the clock."
      />

      <Section title="Activity 1 — The 360° Solver">
        <GameCard
          tag="Game · Calculation"
          title="Find the missing angle"
          goal="A fresh quadrilateral every round. Use the 360° rule to find x."
        >
          <AngleSolver />
        </GameCard>
      </Section>

      <Section title="Activity 2 — Property Sorting">
        <GameCard
          tag="Game · Drag & drop"
          title="Trapezium or parallelogram?"
          goal="Decide whether each property belongs to the trapezium, the parallelogram, or both."
        >
          <ShapeSorter />
        </GameCard>
      </Section>

      <Section title="Activity 3 — Multiple Choice Quiz">
        <GameCard
          tag="Game · Quiz"
          title="Exam-style questions"
          goal="Eight questions with instant feedback and the reason behind each answer."
        >
          <Quiz />
        </GameCard>
      </Section>

      <Section title="Activity 4 — Proof Builder">
        <GameCard
          tag="Game · Reasoning"
          title="Put the proof in order"
          goal="Rebuild a full geometric proof one justified statement at a time."
        >
          <ProofBuilder />
        </GameCard>
      </Section>

      <Section title="Activity 5 — 45-Second Rush">
        <GameCard
          tag="Game · Speed"
          title="True or false rush"
          goal="Fast recall of definitions and properties under time pressure."
        >
          <TrueFalseRush />
        </GameCard>
      </Section>

      <Section title="Classroom & homework tasks">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Paper folding",
              d: "Cut out any quadrilateral, tear off the four corners and fit them around a point. They form a full turn — 360°.",
            },
            {
              t: "Straw parallelograms",
              d: "Build a shape from two pairs of equal straws. Push it sideways: the sides stay equal and parallel, so it stays a parallelogram.",
            },
            {
              t: "Shape hunt",
              d: "Photograph five quadrilaterals around school or home — windows, tiles, railings — and classify each one with a reason.",
            },
            {
              t: "Design challenge",
              d: "Design a flowerpot face as a trapezium where m(∠C) = m(∠D). Calculate all four angles and justify the parallel sides.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border bg-card p-5">
              <h3 className="text-base font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <Note title="Teacher tip">
          Ask students to state the <em>reason</em> for every step out loud. Naming the rule —
          corresponding, alternate, co-interior, vertically opposite — is what earns full marks in
          proof questions.
        </Note>
      </Section>
    </>
  );
}
