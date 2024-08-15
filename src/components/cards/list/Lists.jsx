import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import styled from "styled-components";

export const Lists = ({ title }) => {
  return (
    <StyledList>
      <p>{title}</p>
      <MdOutlineEdit />
    </StyledList>
  );
};

const StyledList = styled.li`
  width: 180px;
  height: 30px;
  background-color: #e6e5e5;
  list-style: none;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: 1px solid #bbbbbb;
`;
