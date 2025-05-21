export default function ResultDisplay({ hope, fear }) {
  if (hope == null || fear == null) return null;

  let narrative = "Neutral outcome.";
  if (hope > fear) narrative = "Hope shines through.";
  else if (fear > hope) narrative = "Darkness creeps in...";

  return (
    <div className="text-center mt-4">
      <p className="text-lg">Narrative: {narrative}</p>
    </div>
  );
}
