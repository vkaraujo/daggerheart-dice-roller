import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import ResultDisplay from "./components/ResultDisplay";
import useDiceRoll from "./hooks/useDiceRoll";

export default function App() {
  const { hope, fear, rolling, roll } = useDiceRoll();

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-4">
      <div className="flex gap-8">
        <Dice label="Hope" value={hope} color="bg-blue-600" rolling={rolling} />
        <Dice label="Fear" value={fear} color="bg-red-600" rolling={rolling} />
      </div>
      <RollButton onClick={roll} disabled={rolling} />
      <ResultDisplay hope={hope} fear={fear} />
    </div>
  );
}
