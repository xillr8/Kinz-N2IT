export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}




