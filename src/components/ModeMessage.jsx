export default function ModeMessage({ mode }) {
  if (mode === "normal") return null;

  return (
    <p className="text-sm text-zinc-500 italic mb-2 text-center">
      Rolling with {mode}...
    </p>
  );
}
