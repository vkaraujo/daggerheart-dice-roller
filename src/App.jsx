import Dice from "./components/Dice";
import RollButton from "./components/RollButton";
import ResultDisplay from "./components/ResultDisplay";
import useDiceRoll from "./hooks/useDiceRoll";

export default function App() {
  const { hope, fear, rolling, prompt, roll } = useDiceRoll();

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 flex flex-col items-center justify-center p-4">
      <div className="flex gap-8">
        <Dice label="Hope" value={hope} color="bg-blue-600" rolling={rolling} />
        <Dice label="Fear" value={fear} color="bg-red-600" rolling={rolling} />
      </div>

      <RollButton onClick={roll} disabled={rolling} />
      <ResultDisplay hope={hope} fear={fear} prompt={prompt} />

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
