interface Props {
  title: string;
  confidence: number;
  risk: string;
  cost: string;
  onClick: () => void;
}

export default function DecisionCard({
  title,
  confidence,
  risk,
  cost,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="w-64 rounded-2xl bg-slate-800 border border-slate-700 p-5 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-indigo-500/30 hover:-translate-y-1"
    >
      {/* Title */}
      <h2 className="text-white text-lg font-bold">
        {title}
      </h2>

      {/* Status */}
      <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
        ● Active
      </div>

      {/* Details */}
      <div className="mt-5 space-y-4">

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Confidence</span>
          <span className="text-green-400 font-semibold">
            {confidence}%
          </span>
        </div>

        <div className="w-full h-2 bg-slate-700 rounded-full">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: `${confidence}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Risk</span>
          <span className="text-red-400 font-semibold">
            {risk}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Cost</span>
          <span className="text-yellow-400 font-semibold">
            {cost}
          </span>
        </div>

      </div>
    </div>
  );
}