import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Rule, Note, Steps, ExampleCard, TryIt } from "@/components/Content";
import { QuadDiagonalFigure, Example1Figure, AngleQuadFigure } from "@/components/Figures";

export const Route = createFileRoute("/angle-sum")({
  head: () => ({
    meta: [
      { title: "Sum of Interior Angles of a Quadrilateral — 360° Proof" },
      {
        name: "description",
        content:
          "Proof that the interior angles of any quadrilateral sum to 360°, using a diagonal to split it into two triangles, with worked examples.",
      },
      { property: "og:title", content: "Sum of Interior Angles of a Quadrilateral" },
      {
        property: "og:description",
        content: "The diagonal proof of the 360° rule, with worked examples and practice.",
      },
    ],
  }),
  component: AngleSum,
});

function AngleSum() {
  return (
    <>
      <PageHeader
        eyebrow="Section 1"
        title="The Sum of the Interior Angles"
        intro="Split any quadrilateral with one diagonal and you get two triangles. Two triangles carry 180° each — so the quadrilateral carries 360°."
      />

      <Section title="The rule and its proof">
        <Rule>
          The sum of the measures of the interior angles of any quadrilateral equals{" "}
          <span className="font-mono">360°</span>.
        </Rule>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm">
              Draw the diagonal <span className="font-mono">AC</span> of quadrilateral{" "}
              <span className="font-mono">ABCD</span>. It creates triangle{" "}
              <span className="font-mono">ABC</span> and triangle <span className="font-mono">ACD</span>.
            </p>
            <Steps
              items={[
                <>In △ABC: m(∠1) + m(∠2) + m(∠3) = 180°</>,
                <>In △ACD: m(∠4) + m(∠5) + m(∠6) = 180°</>,
                <>Adding: [m(∠1)+m(∠6)] + m(∠2) + [m(∠3)+m(∠4)] + m(∠5) = 360°</>,
                <>So m(∠A) + m(∠B) + m(∠C) + m(∠D) = 360°</>,
              ]}
            />
            <Note title="Why it works">
              ∠1 and ∠6 together rebuild the full angle A, and ∠3 with ∠4 rebuild the full angle C.
              Nothing is lost or added by drawing the diagonal.
            </Note>
          </div>
          <QuadDiagonalFigure />
        </div>
      </Section>

      <Section title="Worked examples">
        <ExampleCard
          n={1}
          prompt={
            <>
              In the opposite figure, find with proof the value of <span className="font-mono">x</span>.
              Triangle ABC has angles 50° and 70° at A and B, and CFED is a quadrilateral sharing the
              vertical angle at C.
            </>
          }
          figure={<Example1Figure />}
          solution={
            <Steps
              items={[
                <>In △ABC: m(∠ACB) + 50° + 70° = 180° → m(∠ACB) = 60°</>,
                <>m(∠DCF) = m(∠ACB) = 60° (vertically opposite angles)</>,
                <>CFED is a quadrilateral → x + 130 + 85 + 60 = 360</>,
                <>
                  <strong>x = 360 − 275 = 85</strong>
                </>,
              ]}
            />
          }
        />

        <ExampleCard
          n={2}
          prompt={
            <>
              In quadrilateral ABCD, <span className="font-mono">BC ∥ AE</span> and{" "}
              <span className="font-mono">BF</span> is a transversal. Given m(∠B) = 72°, m(∠C) = 125°
              and m(∠D) = 120°, find <span className="font-mono">x</span> = m(∠EAD).
            </>
          }
          figure={<AngleQuadFigure angles={["125°", "120°", "72°"]} unknown="x°" />}
          solution={
            <Steps
              items={[
                <>m(∠FAE) = m(∠B) = 72° (corresponding angles)</>,
                <>m(∠DAB) = 360° − (125° + 120° + 72°) = 43°</>,
                <>m(∠FAE) + m(∠EAD) + m(∠DAB) = 180° (straight line)</>,
                <>
                  72 + x + 43 = 180 → <strong>x = 65</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={1}
          prompt={
            <>
              A quadrilateral has angles 96°, 88° and 104°. Find the fourth angle{" "}
              <span className="font-mono">x</span>, giving your reason.
            </>
          }
          figure={<AngleQuadFigure angles={["96°", "88°", "104°"]} />}
          answer={
            <Steps
              items={[
                <>Sum of interior angles of a quadrilateral = 360°</>,
                <>x = 360 − (96 + 88 + 104) = 360 − 288</>,
                <>
                  <strong>x = 72°</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={2}
          prompt={
            <>
              The four angles of a quadrilateral are in the ratio{" "}
              <span className="font-mono">2 : 3 : 3 : 4</span>. Find each angle.
            </>
          }
          answer={
            <Steps
              items={[
                <>2x + 3x + 3x + 4x = 360 → 12x = 360 → x = 30</>,
                <>
                  <strong>60°, 90°, 90°, 120°</strong>
                </>,
              ]}
            />
          }
        />
      </Section>

      <Section title="Common mistakes">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Using 180° instead of 360° — that is the triangle rule, not the quadrilateral rule.</li>
          <li>
            Adding an <em>exterior</em> angle into the sum. Convert it first:{" "}
            <span className="font-mono">interior = 180° − exterior</span>.
          </li>
          <li>Forgetting to justify each step; every jump needs a reason in a proof question.</li>
        </ul>
      </Section>
    </>
  );
}
