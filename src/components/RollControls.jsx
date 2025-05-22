import RollButton from "./RollButton";

export default function RollControls({ roll, rolling }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 w-full justify-center items-center">
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
  );
}
