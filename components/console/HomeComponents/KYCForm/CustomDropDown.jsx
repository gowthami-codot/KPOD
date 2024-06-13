import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component for the dropdown container
const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  font-size:12px
  @media (max-width: 768px) 
    font-size: 9px; 
  }
`;

// Styled component for the dropdown button
const DropdownButton = styled.button`
  background-color: #F3F4F5;
  color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-radius: 4px;
  font-size:14px;
  padding:12px 18px;
  @media (max-width: 768px) 
    font-size: 9px; 
    padding:9px 14px;
  }
`;

// Styled component for the dropdown content
const DropdownContent = styled.div`
  position: absolute;
  background-color: #FAFBFC;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  font-size:12px;
  @media (max-width: 768px) 
    font-size: 9px; 
  }
`;

// Styled component for the dropdown item
const DropdownItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  

  &:hover {
    background-color: #41515C09;
  }
`;

// SVG component for dropdown arrow
const DropdownArrow = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Custom dropdown component
const CustomDropDown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0]);
    }
  }, []);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Call onSelect callback with selected option
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption}</span>
        <DropdownArrow />
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default CustomDropDown;
