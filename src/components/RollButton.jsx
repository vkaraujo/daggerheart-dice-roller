export default function RollButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 bg-gray-800 text-white font-semibold rounded shadow disabled:opacity-50"
    >
      {children}
    </button>
  );
}
