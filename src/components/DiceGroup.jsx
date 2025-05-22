import Dice from "./Dice";
import D6 from "./D6";

export default function DiceGroup({ hope, fear, d6, mode, rolling }) {
  const isCritical = hope === fear && hope !== null;
  const hopeWins = hope > fear;
  const fearWins = fear > hope;

  return (
    <div className="flex gap-8 flex-wrap justify-center items-center mb-6">
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
  );
}
