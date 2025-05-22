import { useState } from "react";
import { getNarrativePrompt } from "../utils/getNarrativePrompt";

export default function useDiceRoll() {
  const [results, setResults] = useState({
    hope: null,
    fear: null,
    d6: null,
  });
  const [rolling, setRolling] = useState(false);
  const [prompt, setPrompt] = useState(null);
  const [mode, setMode] = useState("normal");

  const roll = (newMode = "normal") => {
    setRolling(true);
    setPrompt(null);
  
    setTimeout(() => {
      const hope = Math.ceil(Math.random() * 12);
      const fear = Math.ceil(Math.random() * 12);
      const d6 = newMode === "advantage" || newMode === "disadvantage"
        ? Math.ceil(Math.random() * 6)
        : null;
  
      setMode(newMode);
      setResults({ hope, fear, d6 });
      setPrompt(getNarrativePrompt(hope, fear));
      setRolling(false);
    }, 800);
  };  

  return {
    ...results,
    rolling,
    prompt,
    mode,
    roll,
  };
}
