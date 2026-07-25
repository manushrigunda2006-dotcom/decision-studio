interface Props {
  selectedDecision: any;
}

export default function RightSidebar({
  selectedDecision,
}: Props) {
  return (
    <aside className="w-80 h-screen bg-slate-900 border-l border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Decision Details
      </h2>

      {!selectedDecision ? (
        <div className="text-slate-400">
          Click any decision card to view details.
        </div>
      ) : (
        <>
          <div className="bg-slate-800 rounded-xl p-5 mb-5">

            <h3 className="text-xl font-semibold text-white">
              {selectedDecision.title}
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Confidence
                </span>

                <span className="text-green-400">
                  {selectedDecision.confidence}%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Risk
                </span>

                <span className="text-red-400">
                  {selectedDecision.risk}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Cost
                </span>

                <span className="text-yellow-400">
                  {selectedDecision.cost}
                </span>
              </div>

            </div>

          </div>

          <div className="bg-slate-800 rounded-xl p-5">

            <h3 className="text-white font-semibold mb-3">
              AI Recommendation
            </h3>

            <p className="text-slate-400">
              This decision has strong confidence.
              Consider proceeding after reviewing
              dependencies and stakeholder approval.
            </p>

          </div>
        </>
      )}

    </aside>
  );
}