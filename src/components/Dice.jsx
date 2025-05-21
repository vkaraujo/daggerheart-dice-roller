import { motion } from "framer-motion";

export default function Dice({ value, label, color, rolling }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <motion.div
        className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl ${color}`}
        animate={{ rotate: rolling ? 360 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {value ?? "?"}
      </motion.div>
    </div>
  );
}
