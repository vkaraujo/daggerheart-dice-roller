import { motion } from "framer-motion";

export default function Dice({
  value,
  label,
  color,
  rolling,
  isWinner = false,
  isCritical = false,
}) {
  const baseColor = color === "hope" ? "#3b82f6" : "#ef4444";
  const criticalColor = "#c084fc";

  const backgroundColor = isCritical ? criticalColor : baseColor;

  return (
    <div className="flex flex-col items-center min-h-[130px]">
      <motion.div
        className="w-24 h-24 relative flex items-center justify-center font-bold text-3xl text-white"
        animate={{
          rotate: rolling ? 360 : 0,
          scale: rolling ? 1.1 : isWinner ? 1.2 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          clipPath:
            "polygon(50% 0%, 80% 10%, 100% 35%, 100% 65%, 80% 90%, 50% 100%, 20% 90%, 0% 65%, 0% 35%, 20% 10%)",
          backgroundColor,
        }}
      >
        {value ?? "?"}
      </motion.div>
      <p className="text-sm text-gray-500 mt-2">{label}</p>
    </div>
  );
}
