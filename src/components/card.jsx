import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`border border-gray-700 rounded-lg shadow-md bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

