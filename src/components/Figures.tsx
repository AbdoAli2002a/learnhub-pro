import type { ReactNode } from "react";

export function Figure({
  caption,
  children,
  viewBox = "0 0 320 200",
}: {
  caption?: string;
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <figure className="rounded-lg border bg-card p-3">
      <svg
        viewBox={viewBox}
        className="w-full h-auto"
        role="img"
        aria-label={caption ?? "Geometry figure"}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          className="text-primary"
        >
          {children}
        </g>
      </svg>
      {caption ? (
        <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Label({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <text
      x={x}
      y={y}
      fontSize="13"
      fill="currentColor"
      stroke="none"
      className="text-foreground font-mono"
    >
      {children}
    </text>
  );
}

export function AngleTag({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <text x={x} y={y} fontSize="12" fill="currentColor" stroke="none" className="text-accent-foreground">
      {children}
    </text>
  );
}

/* ---------- Named figures ---------- */

export function QuadDiagonalFigure() {
  return (
    <Figure caption="Diagonal AC splits quadrilateral ABCD into two triangles: 180° + 180° = 360°.">
      <polygon points="40,160 280,160 240,40 80,60" />
      <line x1="40" y1="160" x2="240" y2="40" strokeDasharray="6 5" />
      <Label x={22} y={175}>A</Label>
      <Label x={284} y={175}>B</Label>
      <Label x={246} y={34}>C</Label>
      <Label x={64} y={54}>D</Label>
      <AngleTag x={58} y={148}>1</AngleTag>
      <AngleTag x={78} y={134}>6</AngleTag>
      <AngleTag x={252} y={150}>2</AngleTag>
      <AngleTag x={224} y={62}>3</AngleTag>
      <AngleTag x={210} y={52}>4</AngleTag>
      <AngleTag x={92} y={78}>5</AngleTag>
    </Figure>
  );
}

export function TrapeziumFigure() {
  return (
    <Figure caption="Trapezium ABCD: AB ∥ DC, while DA and CB are not parallel.">
      <polygon points="30,160 290,160 240,50 90,50" />
      <Label x={14} y={175}>A</Label>
      <Label x={294} y={175}>B</Label>
      <Label x={246} y={44}>C</Label>
      <Label x={76} y={44}>D</Label>
      <path d="M150 160 h20 M150 50 h20" strokeWidth="3" className="text-accent" />
    </Figure>
  );
}

export function IsoscelesTrapeziumFigure() {
  return (
    <Figure caption="Isosceles trapezium: the two non-parallel sides are equal in length.">
      <polygon points="40,160 280,160 230,50 90,50" />
      <Label x={24} y={175}>A</Label>
      <Label x={284} y={175}>B</Label>
      <Label x={236} y={44}>C</Label>
      <Label x={76} y={44}>D</Label>
      <path d="M60 108 l14 6 M255 108 l-14 6" strokeWidth="3" className="text-accent" />
    </Figure>
  );
}

export function RightTrapeziumFigure() {
  return (
    <Figure caption="Right trapezium: one of its angles is a right angle.">
      <polygon points="40,160 280,160 280,50 40,50" fill="none" />
      <polyline points="40,160 280,160 220,50 40,50 40,160" />
      <rect x="40" y="140" width="20" height="20" strokeWidth="1.5" />
      <Label x={24} y={175}>A</Label>
      <Label x={284} y={175}>B</Label>
      <Label x={224} y={44}>C</Label>
      <Label x={24} y={44}>D</Label>
    </Figure>
  );
}

export function ParallelogramFigure({
  showDiagonals = false,
  caption,
}: {
  showDiagonals?: boolean;
  caption?: string;
}) {
  return (
    <Figure caption={caption ?? "Parallelogram ABCD: AB ∥ DC and AD ∥ BC."}>
      <polygon points="40,160 250,160 290,50 80,50" />
      {showDiagonals ? (
        <>
          <line x1="40" y1="160" x2="290" y2="50" strokeDasharray="5 5" />
          <line x1="250" y1="160" x2="80" y2="50" strokeDasharray="5 5" />
          <circle cx="165" cy="105" r="3.5" className="text-accent" fill="currentColor" />
          <Label x={170} y={100}>M</Label>
        </>
      ) : null}
      <Label x={24} y={175}>A</Label>
      <Label x={254} y={175}>B</Label>
      <Label x={294} y={44}>C</Label>
      <Label x={66} y={44}>D</Label>
    </Figure>
  );
}

export function Example1Figure() {
  return (
    <Figure caption="Example 1: triangle ABC meets quadrilateral CFED at the vertical angles at C.">
      <polyline points="30,150 150,150 30,60 30,150" />
      <polyline points="150,150 260,180 290,80 210,50 150,150" />
      <Label x={14} y={166}>A</Label>
      <Label x={140} y={168}>C</Label>
      <Label x={16} y={52}>B</Label>
      <Label x={266} y={196}>F</Label>
      <Label x={294} y={76}>E</Label>
      <Label x={214} y={44}>D</Label>
      <AngleTag x={40} y={142}>50°</AngleTag>
      <AngleTag x={36} y={74}>70°</AngleTag>
      <AngleTag x={236} y={172}>130°</AngleTag>
      <AngleTag x={258} y={92}>85°</AngleTag>
      <AngleTag x={190} y={72}>x°</AngleTag>
    </Figure>
  );
}

export function AngleQuadFigure({
  angles,
  unknown = "x°",
}: {
  angles: [string, string, string];
  unknown?: string;
}) {
  return (
    <Figure caption="Quadrilateral with three known angles.">
      <polygon points="40,160 280,160 250,50 70,60" />
      <Label x={24} y={175}>A</Label>
      <Label x={284} y={175}>B</Label>
      <Label x={256} y={44}>C</Label>
      <Label x={54} y={54}>D</Label>
      <AngleTag x={54} y={146}>{unknown}</AngleTag>
      <AngleTag x={244} y={146}>{angles[0]}</AngleTag>
      <AngleTag x={220} y={72}>{angles[1]}</AngleTag>
      <AngleTag x={80} y={82}>{angles[2]}</AngleTag>
    </Figure>
  );
}
