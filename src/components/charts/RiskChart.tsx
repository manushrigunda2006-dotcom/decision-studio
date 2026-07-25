import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Low", value: 8 },
  { name: "Medium", value: 6 },
  { name: "High", value: 4 },
];

const COLORS = ["#22C55E", "#FACC15", "#EF4444"];

export default function RiskChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h3 className="text-white font-semibold mb-4">
        Risk Distribution
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}