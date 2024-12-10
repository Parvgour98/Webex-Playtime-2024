import { useState } from "react";
import "./CustomDropdown.css";

const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="custom-dropdown-container">
      <div
        className="custom-dropdown-selected"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-expanded={isMenuOpen}
      >
        {selectedOption ? selectedOption.label : "Select Meeting"}
      </div>
      {isMenuOpen && (
        <div className="custom-dropdown-list" role="listbox">
          {colourOptions.map((option) => (
            <div
              key={option.value}
              className="custom-dropdown-option"
              role="option"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
