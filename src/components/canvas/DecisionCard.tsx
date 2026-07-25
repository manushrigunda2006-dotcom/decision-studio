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
      className="w-64 bg-slate-800 border border-slate-700 rounded-2xl p-5 shadow-xl cursor-pointer hover:border-indigo-500 hover:scale-105 transition-all duration-300"
    >
      <h2 className="text-white text-lg font-bold">
        {title}
      </h2>

      <div className="mt-4 space-y-3">

        <div className="flex justify-between">
          <span className="text-gray-400">Confidence</span>
          <span className="text-green-400">
            {confidence}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Risk</span>
          <span className="text-red-400">
            {risk}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Cost</span>
          <span className="text-yellow-400">
            {cost}
          </span>
        </div>

      </div>
    </div>
  );
}