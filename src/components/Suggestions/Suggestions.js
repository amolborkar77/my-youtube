import React from "react";

const Suggestions = ({ suggestions }) => {
  return (
     <div className="fixed bg-white py-2 px-2 w-[42rem] shadow-lg rounded-lg border border-gray-100">
      <ul>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            className="py-3 px-3 shadow-sm hover:bg-gray-100"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
