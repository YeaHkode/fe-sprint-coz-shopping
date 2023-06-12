import React from "react";
import PropTypes from "prop-types";

const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const MenuDropdown = styled.nav`
  position: absolute;
  top: 100%;
  background-color: white;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  border-radius: 1rem;
  right: -70%;
  z-index: 20;
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 130px;
`;

const DropdownListItem = styled.li`
  margin: 0;
  flex-grow: 1;
`;

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <MenuButton />;
};
