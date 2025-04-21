import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node)
      ) {
        // Clear input using a synthetic input event
        const syntheticEvent = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        onInputChange(syntheticEvent); // Clear input
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onInputChange]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={onInputChange}
        onKeyUp={onKeyPress}
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
          className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto"
        >
          <ul>
            {suggestions.map((result, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
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
