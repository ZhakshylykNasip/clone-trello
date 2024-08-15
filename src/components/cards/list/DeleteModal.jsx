import React from "react";
import { ModalUI } from "../../UI/ModalUI";
import styled from "styled-components";

export const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <ModalUI onClose={onClose}>
      <StyledModalContent>
        <h2>Вы точно хотите архивировать ?</h2>
        <div>
          <button className="btn" onClick={onDelete}>
            Да
          </button>
          <button onClick={onClose}>Нет</button>
        </div>
      </StyledModalContent>
    </ModalUI>
  );
};

const StyledModalContent = styled.div`
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > h2 {
    color: #064b84;
    text-align: center;
  }

  & > div {
    display: flex;
    gap: 20px;
    .btn {
      color: red;
      border: 1px solid red;
      &:hover {
        background-color: red;
        color: #fff;
        border: none;
      }
    }
    & > button {
      width: 200px;
      height: 50px;
      text-transform: uppercase;
      font-size: 19px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 20px;
      background-color: #fff;
      color: #064b84;
      border: 1px solid green;
      &:hover {
        background-color: #064b84;
        color: #fff;
        border: none;
      }
    }
  }
`;
