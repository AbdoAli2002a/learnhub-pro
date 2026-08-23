import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Rule } from "@/components/Content";
import {
  TrapeziumFigure,
  ParallelogramFigure,
  QuadDiagonalFigure,
} from "@/components/Figures";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quadrilaterals — Lesson Five Study Site" },
      {
        name: "description",
        content:
          "Learn quadrilaterals step by step: the 360° interior angle sum, trapeziums, parallelograms, proof conditions, worked examples and learning games.",
      },
      { property: "og:title", content: "Quadrilaterals — Lesson Five Study Site" },
      {
        property: "og:description",
        content:
          "Angle sum, trapeziums, parallelograms, worked examples and interactive geometry games.",
      },
    ],
  }),
  component: Index,
});

const MAP = [
  {
    to: "/angle-sum" as const,
    title: "The Sum of Interior Angles",
    text: "Why every quadrilateral's four angles add up to exactly 360°, with the diagonal proof and worked examples.",
  },
  {
    to: "/trapezium" as const,
    title: "The Trapezium",
    text: "A quadrilateral with only two parallel sides — plus the isosceles and right trapezium special cases.",
  },
  {
    to: "/parallelogram" as const,
    title: "The Parallelogram",
    text: "Definition and the four core properties: sides, diagonals, opposite angles and consecutive angles.",
  },
  {
    to: "/conditions" as const,
    title: "When Is It a Parallelogram?",
    text: "The five conditions you can use to prove a quadrilateral is a parallelogram, with proof templates.",
  },
  {
    to: "/activities" as const,
    title: "Activities & Games",
    text: "Angle-sum solver, shape sorting, multiple-choice quiz, proof builder and a timed challenge.",
  },
];

function Index() {
  return (
    <>
      <PageHeader
        eyebrow="Unit 3 · Geometry and Measurement · Lesson Five"
        title="Quadrilaterals"
        intro="Everything in this lesson grows from one fact: the four interior angles of any quadrilateral add up to 360°. From there we build trapeziums, parallelograms, and the conditions that let you prove a shape really is a parallelogram."
      />

      <Section title="Learning outcomes">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Understand the concept of a quadrilateral.",
            "Deduce the sum of the interior angles of a quadrilateral.",
            "Recognise and use the trapezium.",
            "Recognise and use the parallelogram.",
            "Determine when a quadrilateral becomes a parallelogram.",
          ].map((o) => (
            <li key={o} className="rounded-lg border bg-card px-4 py-3 text-sm">
              {o}
            </li>
          ))}
        </ul>

        <Rule>
          A <strong>quadrilateral</strong> is a closed plane figure made of four straight sides and
          four vertices.
        </Rule>

        <div>
          <p className="font-semibold">Vocabulary</p>
          <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
            {["Quadrilateral", "Trapezium", "Parallelogram", "Diagonal", "Interior angle"].map(
              (v) => (
                <span key={v} className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                  {v}
                </span>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section title="The three key pictures">
        <div className="grid gap-4 md:grid-cols-3">
          <QuadDiagonalFigure />
          <TrapeziumFigure />
          <ParallelogramFigure />
        </div>
      </Section>

      <Section title="Lesson map">
        <div className="grid gap-4 sm:grid-cols-2">
          {MAP.map((m, i) => (
            <Link
              key={m.to}
              to={m.to}
              className="group rounded-xl border bg-card p-5 transition-colors hover:border-primary"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-lg font-semibold group-hover:text-primary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
