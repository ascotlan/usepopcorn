import { useRef, useEffect } from "react";
import { useKey } from "../hooks/useKey";

export default function Search({ query, onQuery }) {
  const inputEl = useRef(null); //For referencing input el

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) {
      return;
    }
    inputEl.current.focus();
    onQuery("");
  });

  useEffect(() => {
    //foucs on input element
    inputEl.current.focus();

  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
