export default function ResultBox({ hope, fear, extra = null }) {
  const hasRolled = hope != null && fear != null;
  const total = hasRolled ? hope + fear + (extra ?? 0) : null;

  return (
    <div className="mt-8 flex justify-center w-full">
      <div className="bg-white text-zinc-800 px-6 py-2 rounded-full shadow-md border border-zinc-300 text-lg font-medium min-w-[200px] text-center">
        {hasRolled ? (
          <>
            Total Result: <span className="font-bold">{total}</span>
          </>
        ) : (
          <span className="text-zinc-400">Waiting for roll...</span>
        )}
      </div>
    </div>
  );
}
