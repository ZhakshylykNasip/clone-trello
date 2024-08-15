import React from "react";
import styled from "styled-components";

export const ErrorMessage = ({ children }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

const StyledErrorMessage = styled.span`
  color: red;
`;
