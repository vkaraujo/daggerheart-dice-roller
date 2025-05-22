export default function ResultDisplay({ hope, fear, prompt, rolling }) {
  if (rolling || !prompt) {
    return (
      <div className="text-center mt-4 min-h-[2rem] text-zinc-500 italic">
        Rolling...
      </div>
    );
  }

  if (hope == null || fear == null) {
    return (
      <div className="text-center mt-4 min-h-[2rem] text-zinc-400 italic">
        No result yet
      </div>
    );
  }

  const isCritical = hope === fear && hope !== null;
  let prefix = null;
  let color = null;

  if (isCritical) {
    prefix = "CRITICAL!";
    color = "text-purple-600";
  } else if (hope > fear) {
    prefix = "Hope!";
    color = "text-blue-600";
  } else if (fear > hope) {
    prefix = "Fear!";
    color = "text-red-600";
  }

  const cleanedPrompt =
  prefix && typeof prompt === "string"
    ? prompt.replace(`${prefix} `, "")
    : prompt ?? "";

  return (
    <div className="text-center mt-4 min-h-[2rem] text-zinc-600">
      <p className="text-lg italic">
        {prefix && <strong className={`${color} mr-1`}>{prefix}</strong>}
        {cleanedPrompt}
      </p>
    </div>
  );
}
