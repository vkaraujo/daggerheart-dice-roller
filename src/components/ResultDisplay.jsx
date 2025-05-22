export default function ResultDisplay({ hope, fear, prompt }) {
  if (hope == null || fear == null || !prompt) return null;

  return (
    <div className="text-center mt-4">
      <p className="text-lg italic">Narrative: {prompt}</p>
    </div>
  );
}
