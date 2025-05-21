import { useState } from "react";
import { rollHopeAndFear } from "../utils/rollDice";

export default function useDiceRoll() {
  const [results, setResults] = useState({ hope: null, fear: null});
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
        setResults(rollHopeAndFear());
        setRolling(false);
    }, 1000);
  };

  return { ...results, rolling, roll };
}
