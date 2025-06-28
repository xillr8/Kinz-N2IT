export default function Button({ children, className, ...props }) {
  return (
    <button className={`transition duration-200 font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
}


