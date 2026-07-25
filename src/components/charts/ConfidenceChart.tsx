import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", confidence: 72 },
  { name: "Feb", confidence: 80 },
  { name: "Mar", confidence: 76 },
  { name: "Apr", confidence: 91 },
  { name: "May", confidence: 88 },
  { name: "Jun", confidence: 94 },
];

export default function ConfidenceChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-4">
        Confidence Trend
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="confidence"
            stroke="#6366F1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}