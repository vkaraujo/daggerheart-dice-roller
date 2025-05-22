export default function ResultBox({ hope, fear, extra = null, mode = "normal" }) {
  const hasRolled = hope != null && fear != null;
  let total = hasRolled ? hope + fear : null;
  let modifier = 0;

  if (total != null && extra != null) {
    modifier = mode === "advantage" ? extra : mode === "disadvantage" ? -extra : 0;
    total += modifier;
  }

  const renderBreakdown = () => {
    if (!hasRolled) return null;
  
    const parts = [`${hope}`, `${fear}`];
  
    if (extra != null) {
      const isAdv = mode === "advantage";
      const isDis = mode === "disadvantage";
      const sign = isDis ? " - " : " + ";
      const color = isAdv
        ? "text-green-600"
        : isDis
        ? "text-red-600"
        : "";
  
      parts.push(
        <span key="mod" className={color}>
          {sign}{extra}
        </span>
      );
    }
  
    return (
      <>
        (
        {parts.map((part, index) => (
          <span key={index}>{index > 0 && typeof part === "string" ? " + " : ""}{part}</span>
        ))}
        )
      </>
    );
  };

  return (
    <div className="mt-8 flex justify-center w-full">
      <div className="bg-white text-zinc-800 px-6 py-2 rounded-full shadow-md border border-zinc-300 text-lg font-medium min-w-[200px] text-center">
        {hasRolled ? (
          <>
            Total Result: <span className="font-bold">{total}</span>{" "}
            <span className="text-sm text-zinc-500 font-normal ml-2">{renderBreakdown()}</span>
          </>
        ) : (
          <span className="text-zinc-400">Waiting for roll...</span>
        )}
      </div>
    </div>
  );
}
