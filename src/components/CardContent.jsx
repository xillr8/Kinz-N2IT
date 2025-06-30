export default function CardContent({ children, className = "" }) {
  return (
    <div className={`text-white ${className}`}>
      {children}
    </div>
  );
}

