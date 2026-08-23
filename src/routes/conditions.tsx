import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Rule, Note, Steps, ExampleCard, TryIt } from "@/components/Content";
import { ParallelogramFigure, Figure, Label, AngleTag } from "@/components/Figures";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "When Does a Quadrilateral Become a Parallelogram?" },
      {
        name: "description",
        content:
          "The five conditions that prove a quadrilateral is a parallelogram, with proof templates and fully solved examples.",
      },
      { property: "og:title", content: "When Does a Quadrilateral Become a Parallelogram?" },
      {
        property: "og:description",
        content: "Five proof conditions for parallelograms, with templates and worked proofs.",
      },
    ],
  }),
  component: ConditionsPage,
});

const CONDITIONS = [
  "Each two opposite sides are parallel.",
  "Each two opposite sides are equal in length.",
  "Two opposite sides are both parallel and equal in length.",
  "The diagonals bisect each other.",
  "Each two opposite angles are equal in measure.",
];

function ConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Section 4"
        title="When Does a Quadrilateral Become a Parallelogram?"
        intro="You do not have to prove everything. Any one of these five conditions is enough on its own to conclude that a quadrilateral is a parallelogram."
      />

      <Section title="The five conditions">
        <Rule>A quadrilateral is a parallelogram if any one of the following conditions holds.</Rule>
        <ol className="grid gap-3 sm:grid-cols-2">
          {CONDITIONS.map((c, i) => (
            <li key={c} className="rounded-lg border bg-card px-4 py-3 text-sm">
              <span className="font-mono text-xs text-accent-foreground">0{i + 1}</span>
              <p className="mt-1">{c}</p>
            </li>
          ))}
        </ol>
        <Note title="Proof template">
          State what is <em>given</em> → derive one condition using angle rules (corresponding,
          alternate, co-interior, vertically opposite) or length rules → name the condition → conclude
          “therefore ABCD is a parallelogram”.
        </Note>
      </Section>

      <Section title="Worked examples">
        <ExampleCard
          n={5}
          prompt={
            <>
              Find the values of a and b that make quadrilateral ABCD a parallelogram, where
              DC = 2a cm, AB = 10 cm, m(∠ABD) = (b − 21)° and m(∠BDC) = 30°.
            </>
          }
          figure={
            <Figure caption="DC and AB must be both equal and parallel.">
              <polygon points="40,160 250,160 290,50 80,50" />
              <line x1="40" y1="160" x2="290" y2="50" strokeDasharray="5 5" />
              <Label x={24} y={175}>A</Label>
              <Label x={254} y={175}>B</Label>
              <Label x={294} y={44}>C</Label>
              <Label x={66} y={44}>D</Label>
              <AngleTag x={130} y={178}>10 cm</AngleTag>
              <AngleTag x={170} y={44}>2a cm</AngleTag>
              <AngleTag x={216} y={150}>(b−21)°</AngleTag>
              <AngleTag x={96} y={66}>30°</AngleTag>
            </Figure>
          }
          solution={
            <Steps
              items={[
                <>Use the condition: two opposite sides both parallel and equal.</>,
                <>DC = AB → 2a = 10 → a = 5</>,
                <>DC ∥ AB → m(∠ABD) = m(∠BDC) (alternate interior angles) → b − 21 = 30</>,
                <>
                  <strong>a = 5, b = 51</strong>
                </>,
              ]}
            />
          }
        />

        <ExampleCard
          n={6}
          prompt={
            <>
              ABCD is a parallelogram and H lies on ray AB with AB = BH. Prove that BHCD is a
              parallelogram.
            </>
          }
          figure={
            <Figure caption="AB is extended to H so that AB = BH.">
              <polygon points="30,160 190,160 240,60 80,60" />
              <line x1="190" y1="160" x2="350" y2="160" />
              <line x1="240" y1="60" x2="350" y2="160" strokeDasharray="4 4" />
              <Label x={14} y={176}>A</Label>
              <Label x={186} y={178}>B</Label>
              <Label x={244} y={54}>C</Label>
              <Label x={66} y={54}>D</Label>
              <Label x={340} y={178}>H</Label>
            </Figure>
          }
          solution={
            <Steps
              items={[
                <>ABCD is a parallelogram (given) → AB = DC</>,
                <>AB = BH (given) → DC = BH</>,
                <>AB ∥ CD and H ∈ ray AB → BH ∥ DC</>,
                <>BH and DC are opposite sides that are both equal and parallel</>,
                <>
                  <strong>∴ BHCD is a parallelogram</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={7}
          prompt={
            <>
              ABCD is a quadrilateral with AB ∥ DC, m(∠DAB) = 70°, m(∠ECB) = 110° where E ∈ DC. Prove
              that ABCD is a parallelogram.
            </>
          }
          figure={<ParallelogramFigure />}
          answer={
            <Steps
              items={[
                <>m(∠BCD) = 180° − 110° = 70° (∠ECB and ∠BCD are on a straight line)</>,
                <>So m(∠DAB) = m(∠BCD) = 70° — opposite angles are equal</>,
                <>
                  <strong>∴ ABCD is a parallelogram</strong>
                </>,
              ]}
            />
          }
        />

        <TryIt
          n={8}
          prompt={
            <>
              In quadrilateral ABCD, m(∠A) = (4x + 10)° and m(∠C) = (3x − 40)° with m(∠B) = 50° and
              AB ∥ DC. Find x and prove ABCD is a parallelogram.
            </>
          }
          answer={
            <Steps
              items={[
                <>AB ∥ DC with AD a transversal → m(∠A) + m(∠D) = 180°</>,
                <>Opposite angles equal is the target: set 4x + 10 = 3x − 40 + 90 as the figure gives</>,
                <>
                  A cleaner route: since AB ∥ DC and m(∠B) = m(∠D), the shape has both pairs of
                  opposite angles equal, <strong>therefore ABCD is a parallelogram</strong>.
                </>,
              ]}
            />
          }
        />
      </Section>

      <Section title="Choosing the right condition">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 pr-4 font-semibold">What the question gives you</th>
                <th className="py-2 font-semibold">Condition to use</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Two side lengths in terms of x and y", "Opposite sides equal in length"],
                ["Angles at A and C only", "Opposite angles equal in measure"],
                ["Diagonals meeting at a point M with segments given", "Diagonals bisect each other"],
                ["One pair marked parallel plus one length", "One pair both parallel and equal"],
                ["Two pairs of parallel marks", "Opposite sides parallel"],
              ].map(([a, b]) => (
                <tr key={a} className="border-b last:border-0">
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
