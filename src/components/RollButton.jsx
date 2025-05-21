export default function RollButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-gray-800 text-white px-6 py-3 rounded mt-4 hover:bg-gray-700 disabled:opacity-50"
    >
      Roll Dice
    </button>
  );
}
