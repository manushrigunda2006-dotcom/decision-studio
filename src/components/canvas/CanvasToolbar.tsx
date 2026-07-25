import {
  Plus,
  ZoomIn,
  ZoomOut,
  Download,
} from "lucide-react";

export default function CanvasToolbar() {

  const action = (text: string) => {
    alert(text);
  };

  return (
    <div className="flex justify-between items-center bg-slate-800 border border-slate-700 rounded-2xl p-4 mb-6">

      <h3 className="text-white text-xl font-semibold">
        Decision Workspace
      </h3>

      <div className="flex gap-3">

        <button
          onClick={() => action("Add New Decision")}
          className="p-3 rounded-xl bg-slate-700 hover:bg-indigo-600 transition"
        >
          <Plus size={20} />
        </button>

        <button
          onClick={() => action("Zoom In")}
          className="p-3 rounded-xl bg-slate-700 hover:bg-indigo-600 transition"
        >
          <ZoomIn size={20} />
        </button>

        <button
          onClick={() => action("Zoom Out")}
          className="p-3 rounded-xl bg-slate-700 hover:bg-indigo-600 transition"
        >
          <ZoomOut size={20} />
        </button>

        <button
          onClick={() => action("Decision Canvas Exported")}
          className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
        >
          <Download size={20} />
        </button>

      </div>

    </div>
  );
}