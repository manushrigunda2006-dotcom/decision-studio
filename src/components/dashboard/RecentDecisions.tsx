const rows = [
  {
    name: "Launch Product",
    status: "Approved",
    confidence: "92%",
  },
  {
    name: "Hire Team",
    status: "Review",
    confidence: "84%",
  },
  {
    name: "Marketing Strategy",
    status: "Approved",
    confidence: "88%",
  },
  {
    name: "Raise Funding",
    status: "Pending",
    confidence: "76%",
  },
];

export default function RecentDecisions() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-white text-xl font-semibold mb-6">
        Recent Decisions
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 border-b border-slate-700">
            <th className="pb-3">Decision</th>
            <th>Status</th>
            <th>Confidence</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-slate-700"
            >
              <td className="py-4 text-white">{row.name}</td>
              <td className="text-indigo-400">{row.status}</td>
              <td className="text-green-400">{row.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}