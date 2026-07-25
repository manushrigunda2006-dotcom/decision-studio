import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-xl hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all"
    >
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

      <p className="text-green-400 text-sm mt-3">
        ↑ Updated Today
      </p>
    </motion.div>
  );
}