import React from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import "./scrollTopButton.css";

interface ScrollTopButtonProps {
  offset: number;
}
export function ScrollTopButton({ offset }: ScrollTopButtonProps) {
  const isVisible = useScrollPosition(offset);

  return (
    <button
      className="scrollTopButton btn btn-secondary"
      type="button"
      style={{ display: isVisible ? "inline" : "none" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
