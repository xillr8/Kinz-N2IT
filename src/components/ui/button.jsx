import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

