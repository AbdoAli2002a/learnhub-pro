import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Rule, Note, Steps, ExampleCard, TryIt } from "@/components/Content";
import {
  TrapeziumFigure,
  IsoscelesTrapeziumFigure,
  RightTrapeziumFigure,
} from "@/components/Figures";

export const Route = createFileRoute("/trapezium")({
  head: () => ({
    meta: [
      { title: "The Trapezium — Definition, Types and Examples" },
      {
        name: "description",
        content:
          "A trapezium is a quadrilateral with only two parallel sides. Learn the isosceles and right trapezium, co-interior angles, and solved examples.",
      },
      { property: "og:title", content: "The Trapezium — Definition, Types and Examples" },
      {
        property: "og:description",
        content: "Isosceles and right trapeziums, co-interior angle reasoning, worked examples.",
      },
    ],
  }),
  component: TrapeziumPage,
});

function TrapeziumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Section 2"
        title="The Trapezium"
        intro="The first special quadrilateral. One pair of sides is parallel — and only one. That single parallel pair unlocks co-interior angle reasoning."
      />

      <Section title="Definition">
        <Rule>A trapezium is a quadrilateral that has only two parallel sides.</Rule>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm">
            <p>
              In the figure, <span className="font-mono">AB ∥ DC</span> while{" "}
              <span className="font-mono">DA</span> is <strong>not</strong> parallel to{" "}
              <span className="font-mono">CB</span>. Therefore ABCD is a trapezium.
            </p>
            <Note title="Key angle fact">
              Because AB ∥ DC with AD as a transversal, ∠A and ∠D are co-interior (same-side interior)
              angles, so <span className="font-mono">m(∠A) + m(∠D) = 180°</span>. The same holds for
              ∠B and ∠C.
            </Note>
          </div>
          <TrapeziumFigure />
        </div>
      </Section>

      <Section title="Two special trapeziums">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <IsoscelesTrapeziumFigure />
            <p className="text-sm">
              <strong>1. Isosceles trapezium</strong> — the non-parallel sides are equal in length. Its
              base angles are equal in measure and its diagonals are equal.
            </p>
          </div>
          <div className="space-y-3">
            <RightTrapeziumFigure />
            <p className="text-sm">
              <strong>2. Right trapezium</strong> — one of its angles is a right angle. In fact it then
              has two right angles, because co-interior angles are supplementary.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Worked examples">
        <ExampleCard
          n={3}
          prompt={
            <>
              In quadrilateral ABCD the angles are m(∠A) = 2x°, m(∠B) = 3x°, m(∠C) = 3x°, m(∠D) = 4x°.
              Find x and decide whether ABCD is a right trapezium.
            </>
          }
          figure={<RightTrapeziumFigure />}
          solution={
            <Steps
              items={[
                <>2x + 3x + 3x + 4x = 360 → 12x = 360 → x = 30</>,
                <>m(∠A) = 60°, m(∠B) = m(∠C) = 90°, m(∠D) = 120°</>,
                <>m(∠A) + m(∠D) = 60° + 120° = 180°, and they are co-interior on transversal AD</>,
                <>
                  So AB ∥ DC. Since m(∠A) + m(∠B) = 150° ≠ 180°, AD is not parallel to BC.
                </>,
                <>
                  <strong>ABCD is a right trapezium (it has right angles at B and C).</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={3}
          prompt={
            <>
              ABCD is an isosceles trapezium with AB ∥ DC. Given DA ={" "}
              <span className="font-mono">(2a + 3) cm</span>, CB = <span className="font-mono">(9 + a) cm</span>,
              m(∠C) = 127° and m(∠B) = (36 + b)°. Find a and b.
            </>
          }
          figure={<IsoscelesTrapeziumFigure />}
          answer={
            <Steps
              items={[
                <>Non-parallel sides are equal: 2a + 3 = 9 + a → a = 6</>,
                <>∠C and ∠B are co-interior on transversal CB → (36 + b) + 127 = 180</>,
                <>
                  <strong>b = 17, a = 6</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n="4"
          prompt={
            <>
              In trapezium ABCD (AB ∥ DC), m(∠A) = 3x° and m(∠B) = 4x°... but you are told m(∠C) = 112°.
              Find m(∠D).
            </>
          }
          answer={
            <Steps
              items={[
                <>∠C and ∠B are co-interior → m(∠B) = 180 − 112 = 68°</>,
                <>Sum of angles = 360 → m(∠A) + m(∠D) = 360 − (112 + 68) = 180°</>,
                <>
                  If m(∠A) = 3x = 68 is not required — use co-interior directly:{" "}
                  <strong>m(∠D) = 180° − m(∠A)</strong>. With m(∠A) = 84°, m(∠D) = 96°.
                </>,
              ]}
            />
          }
        />
      </Section>
    </>
  );
}
