import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const ModalUI = ({ onClose, children }) => {
  return createPortal(
    <StyledContainer onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </StyledContainer>,
    document.getElementById("modal")
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #32323296;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  & > div {
    padding: 30px;
    background-color: #fff;
    border-radius: 15px;
  }
`;
