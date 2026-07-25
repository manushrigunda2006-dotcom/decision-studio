interface Props {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export default function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
}: Props) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#6366F1"
        strokeWidth="3"
      />
    </svg>
  );
}