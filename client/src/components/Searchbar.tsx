import { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  query: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSuggestionClick: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onInputChange,
  onKeyPress,
  suggestions,
  onSuggestionClick,
}) => {
  const suggestionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node)
      ) {
        const syntheticEvent = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onInputChange(syntheticEvent); // Clear input
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onInputChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      onSuggestionClick(suggestions[highlightedIndex]);
    } else {
      onKeyPress(e); // Trigger search on Enter if nothing highlighted
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
        className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        placeholder="Search for a word..."
      />
      <img
        src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-128.png"
        alt="Search"
        className="w-6 h-6 absolute left-4 top-4"
      />

      {suggestions.length > 0 && (
        <div
          ref={suggestionRef}
          className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50"
        >
          <ul>
            {suggestions.map((result, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer transition duration-200 ${
                  index === highlightedIndex
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => onSuggestionClick(result)}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
