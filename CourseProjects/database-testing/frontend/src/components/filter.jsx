import React from "react";

function Filter({ clickHandler, title, options }) {
  return (
    <div className="filter">
      <p>{title}</p>
      <div className="filter-options">
        {options.map((option, index) => (
          <button
            onClick={() => clickHandler(option)}
            key={index}
            className="filter-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
