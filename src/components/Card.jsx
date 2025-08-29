export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-700 p-6 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}


