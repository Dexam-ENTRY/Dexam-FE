import { useState } from "react";
import styled from "styled-components";
import { colors } from "../design-token";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const SessionSelect = ({
  listname,
  backgroundColor = colors.green[200],
  color = colors.gray[600],
  borderColor = colors.green[400],
  items = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(listname);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectBoxWrapper
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        onClick={handleToggle}
      >
        <ListName $color={color}>{selectedItem}</ListName>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </SelectBoxWrapper>
      {isOpen && (
        <DropdownList>
          {items.map((item) => (
            <DropdownItem key={item} onClick={() => handleSelect(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 380px;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 65px;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${({ $backgroundColor }) => $backgroundColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  cursor: pointer;
`;

const ListName = styled.div`
  font-size: 14px;
  color: ${({ $color }) => $color};
`;

const DropdownList = styled.div`
  position: absolute;

  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${colors.green[400]};
  box-sizing: border-box;
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 15px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.green[100]};
  }
`;
