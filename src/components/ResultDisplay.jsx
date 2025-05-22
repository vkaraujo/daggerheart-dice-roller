export default function ResultDisplay({ hope, fear, prompt }) {
  return (
    <div className="text-center mt-4 min-h-[2rem] text-zinc-600">
      {hope == null || fear == null ? (
        <p className="italic text-sm text-zinc-400">No result yet</p>
      ) : (
        <p className="text-lg italic"> {prompt}</p>
      )}
    </div>
  );
}
