import { useState } from "react";
import { rollHopeAndFear } from "../utils/rollDice";
import { getNarrativePrompt } from "../utils/getNarrativePrompt";

export default function useDiceRoll() {
  const [results, setResults] = useState({ hope: null, fear: null });
  const [rolling, setRolling] = useState(false);
  const [prompt, setPrompt] = useState(null);

  const roll = () => {
    setRolling(true);
    setPrompt(null);

    setTimeout(() => {
      const newResults = rollHopeAndFear();
      setResults(newResults);
      setPrompt(getNarrativePrompt(newResults.hope, newResults.fear));
      setRolling(false);
    }, 1000);
  };

  return { ...results, rolling, prompt, roll };
}
