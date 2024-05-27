"use client";

import { useState, ReactNode } from "react";

interface TextExpanderProps {
  children: string;
}

function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncText =
    children.length > 40 ? `${children.slice(0, 40)}...` : children;

  return (
    <div>
      <p>{isExpanded ? children : truncText}</p>
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default TextExpander;
