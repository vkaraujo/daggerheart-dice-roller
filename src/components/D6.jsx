export default function D6({ value }) {
  if (value == null) return null;

  return (
    <div className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg bg-gray-700 rounded-sm shadow">
      {value}
    </div>
  );
}
