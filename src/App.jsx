import Dice from "./components/Dice";
import D6 from "./components/D6";
import RollButton from "./components/RollButton";
import ResultDisplay from "./components/ResultDisplay";
import ResultBox from "./components/ResultBox";
import useDiceRoll from "./hooks/useDiceRoll";

export default function App() {
  const { hope, fear, d6, mode, rolling, prompt, roll } = useDiceRoll();

  const isCritical = hope === fear && hope !== null;
  const hopeWins = hope > fear;
  const fearWins = fear > hope;

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 flex flex-col items-center justify-center p-4 relative">
      <div className="flex flex-col items-center gap-y-4 mb-6">
        {mode !== "normal" && (
          <p className="mb-2 text-sm text-zinc-500 italic">
            Rolling with {mode}...
          </p>
        )}

        <div className="flex gap-8 mb-6 items-center">
          {mode === "advantage" && <D6 value={d6} />}

          <Dice
            label="Hope"
            value={hope}
            color="hope"
            rolling={rolling}
            isWinner={!isCritical && hopeWins}
            isCritical={isCritical}
          />

          <Dice
            label="Fear"
            value={fear}
            color="fear"
            rolling={rolling}
            isWinner={!isCritical && fearWins}
            isCritical={isCritical}
          />

          {mode === "disadvantage" && <D6 value={d6} />}
        </div>
      </div>

      <div className="flex justify-center gap-x-4 mb-4">
        <RollButton onClick={() => roll("advantage")} disabled={rolling}>
          Advantage
        </RollButton>
        <RollButton onClick={() => roll("normal")} disabled={rolling}>
          Normal Roll
        </RollButton>
        <RollButton onClick={() => roll("disadvantage")} disabled={rolling}>
          Disadvantage
        </RollButton>
      </div>

      <ResultDisplay hope={hope} fear={fear} prompt={prompt} />
      <ResultBox hope={hope} fear={fear} extra={d6} mode={mode}/>

      <div className="mt-10 text-center text-sm opacity-70">
        <img
          src="/dpr-community-logo.png"
          alt="Darrington Press Community Logo"
          className="w-48 mx-auto mb-2"
        />
        <p>
          This project is fan content covered under the{" "}
          <a
            href="https://darringtonpress.com/license/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400"
          >
            Darrington Press Community Gaming License
          </a>.
        </p>
      </div>
    </div>
  );
}
