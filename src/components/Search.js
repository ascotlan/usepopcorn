import { useRef, useEffect } from "react";

export default function Search({ query, onQuery }) {
  const inputEl = useRef(null); //For referencing input el

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) {
        return;
      }

      if (e.code === "Enter") {
        inputEl.current.focus();
        onQuery("");
      }
    };

    document.addEventListener("keydown", callback);

    //foucs on input element
    inputEl.current.focus();

    return () => document.removeEventListener("keydown", callback);

  }, [onQuery]);

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
