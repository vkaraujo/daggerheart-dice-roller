import ResultDisplay from "./components/ResultDisplay";
import ResultBox from "./components/ResultBox";
import useDiceRoll from "./hooks/useDiceRoll";

import DiceGroup from "./components/DiceGroup";
import RollControls from "./components/RollControls";
import ModeMessage from "./components/ModeMessage";
import Footer from "./components/Footer";

export default function App() {
  const { hope, fear, d6, mode, rolling, prompt, roll } = useDiceRoll();

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 flex flex-col items-center justify-center p-4 relative">
      <div className="flex flex-col items-center gap-y-4 mb-6 w-full">
        <ModeMessage mode={mode} />
        <DiceGroup hope={hope} fear={fear} d6={d6} mode={mode} rolling={rolling} />
      </div>

      <RollControls roll={roll} rolling={rolling} />
      <ResultDisplay hope={hope} fear={fear} prompt={prompt} rolling={rolling} />
      <ResultBox hope={hope} fear={fear} extra={d6} mode={mode} />

      <Footer />
    </div>
  );
}
