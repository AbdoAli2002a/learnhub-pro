import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Rule, Note, Steps, ExampleCard, TryIt } from "@/components/Content";
import { ParallelogramFigure, Figure, Label, AngleTag } from "@/components/Figures";

export const Route = createFileRoute("/parallelogram")({
  head: () => ({
    meta: [
      { title: "The Parallelogram — Properties of Sides, Angles and Diagonals" },
      {
        name: "description",
        content:
          "Definition of a parallelogram and its four properties: equal opposite sides, bisecting diagonals, equal opposite angles and supplementary consecutive angles.",
      },
      { property: "og:title", content: "The Parallelogram — Properties and Examples" },
      {
        property: "og:description",
        content: "Sides, diagonals and angle properties of a parallelogram with worked examples.",
      },
    ],
  }),
  component: ParallelogramPage,
});

const PROPS = [
  {
    n: 1,
    title: "Each two opposite sides are equal in length",
    body: "AB = DC and BC = AD.",
  },
  {
    n: 2,
    title: "The diagonals bisect each other",
    body: "If the diagonals meet at M, then AM = CM and BM = DM.",
  },
  {
    n: 3,
    title: "Each two opposite angles are equal in measure",
    body: "m(∠A) = m(∠C) and m(∠B) = m(∠D).",
  },
  {
    n: 4,
    title: "Each two consecutive angles are supplementary",
    body: "m(∠A) + m(∠B) = 180°, m(∠B) + m(∠C) = 180°, and so on around the shape.",
  },
];

function ParallelogramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Section 3"
        title="The Parallelogram"
        intro="Two pairs of parallel sides instead of one. That extra pair forces the sides, the angles and even the diagonals into a strict pattern you can use in every proof."
      />

      <Section title="Definition">
        <Rule>
          A parallelogram is a quadrilateral in which each two opposite sides are parallel:{" "}
          <span className="font-mono">AB ∥ DC</span> and <span className="font-mono">AD ∥ BC</span>.
        </Rule>
        <div className="grid gap-6 md:grid-cols-2">
          <ParallelogramFigure />
          <ParallelogramFigure showDiagonals caption="The diagonals meet at M and bisect each other." />
        </div>
      </Section>

      <Section title="The four properties">
        <div className="grid gap-4 sm:grid-cols-2">
          {PROPS.map((p) => (
            <div key={p.n} className="rounded-xl border bg-card p-5">
              <span className="font-mono text-xs text-accent-foreground">Property {p.n}</span>
              <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <Note title="Reading the notation">
          <span className="font-mono">m(∠A)</span> means “the measure of angle A”. A pair of{" "}
          <em>consecutive</em> angles sits at the two ends of the same side; a pair of{" "}
          <em>opposite</em> angles sits across the diagonal from each other.
        </Note>
      </Section>

      <Section title="Worked examples">
        <ExampleCard
          n={4}
          prompt={
            <>
              ABCD is a parallelogram with m(∠A) = (3x − 50)°, m(∠C) = 2x° and m(∠B) = y°. Find x and y.
            </>
          }
          figure={
            <Figure caption="Opposite angles are equal; consecutive angles are supplementary.">
              <polygon points="40,160 250,160 290,50 80,50" />
              <Label x={24} y={175}>A</Label>
              <Label x={254} y={175}>B</Label>
              <Label x={294} y={44}>C</Label>
              <Label x={66} y={44}>D</Label>
              <AngleTag x={52} y={148}>(3x−50)°</AngleTag>
              <AngleTag x={210} y={150}>y°</AngleTag>
              <AngleTag x={252} y={68}>2x°</AngleTag>
            </Figure>
          }
          solution={
            <Steps
              items={[
                <>Opposite angles are equal: 3x − 50 = 2x → x = 50</>,
                <>m(∠A) = 2 × 50° = 100°</>,
                <>Consecutive angles: m(∠A) + m(∠B) = 180° → 100 + y = 180</>,
                <>
                  <strong>x = 50, y = 80</strong>
                </>,
              ]}
            />
          }
        />

        <ExampleCard
          n="4b"
          prompt={
            <>
              ABCD is a parallelogram with AB = (4x − 7) cm, DC = (2x) cm, AD = (y − 5) cm and BC = 5 cm.
              Find x and y.
            </>
          }
          figure={
            <Figure caption="Opposite sides of a parallelogram are equal in length.">
              <polygon points="40,160 250,160 290,50 80,50" />
              <Label x={24} y={175}>A</Label>
              <Label x={254} y={175}>B</Label>
              <Label x={294} y={44}>C</Label>
              <Label x={66} y={44}>D</Label>
              <AngleTag x={110} y={178}>(4x−7) cm</AngleTag>
              <AngleTag x={150} y={44}>(2x) cm</AngleTag>
              <AngleTag x={12} y={110}>(y−5)</AngleTag>
              <AngleTag x={272} y={110}>5 cm</AngleTag>
            </Figure>
          }
          solution={
            <Steps
              items={[
                <>AB = DC → 4x − 7 = 2x → 2x = 7 → x = 3.5</>,
                <>AD = BC → y − 5 = 5 → y = 10</>,
                <>
                  <strong>x = 3.5, y = 10</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={5}
          prompt={
            <>
              ABCD is a parallelogram whose diagonals meet at M, with MD = 6 cm, MC = 8 cm and DC = 9 cm.
              Calculate the perimeter of triangle CMD.
            </>
          }
          figure={<ParallelogramFigure showDiagonals />}
          answer={
            <Steps
              items={[
                <>Perimeter of △CMD = MD + MC + DC</>,
                <>= 6 + 8 + 9</>,
                <>
                  <strong>= 23 cm</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={6}
          prompt={
            <>
              Architecture: a balcony railing forms parallelogram ABCD with m(∠B) = (3x + 37)° and
              m(∠D) = (9x + 1)°. What is the measure of ∠C?
            </>
          }
          answer={
            <Steps
              items={[
                <>∠B and ∠D are opposite → 3x + 37 = 9x + 1 → 6x = 36 → x = 6</>,
                <>m(∠B) = 3(6) + 37 = 55°</>,
                <>∠B and ∠C are consecutive → m(∠C) = 180 − 55</>,
                <>
                  <strong>m(∠C) = 125°</strong>
                </>,
              ]}
            />
          }
        />
      </Section>
    </>
  );
}
