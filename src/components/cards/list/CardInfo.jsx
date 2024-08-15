import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import styled from "styled-components";
import { DeleteModal } from "./DeleteModal";
import { useDispatch } from "react-redux";
import { addCopyCard, deleteCard } from "../../../store/slices/listsSlice";

export const CardInfo = ({ onClose, id, onOpenListHandler, onUpdateOpen }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const openCloseModalHandler = () => {
    setOpenDeleteModal((state) => !state);
  };

  const deleteCardHandler = () => {
    dispatch(deleteCard(id));
  };

  const addListHandler = () => {
    onOpenListHandler();
    onClose();
  };
  const updateTitleHandler = () => {
    onUpdateOpen();
    onClose();
  };

  const copyCardHandler = () => {
    dispatch(addCopyCard(id));
    onClose();
  };

  return (
    <StyledCardInfo>
      <div>
        <p>{}</p>
        <RiCloseLargeLine cursor={"pointer"} onClick={onClose} />
      </div>
      <p onClick={updateTitleHandler}>Изменить описание</p>
      <p onClick={addListHandler}>Добавить карточку...</p>
      <p onClick={openCloseModalHandler}>Архивировать карточку</p>
      <p onClick={copyCardHandler}>Создать копию</p>
      {openDeleteModal && (
        <DeleteModal
          onDelete={deleteCardHandler}
          onClose={openCloseModalHandler}
        />
      )}
    </StyledCardInfo>
  );
};

const StyledCardInfo = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  position: absolute;
  left: 150px;
  top: 25px;
  z-index: 22;
  border-radius: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  & > p {
    padding: 8px 0 8px 8px;
    margin: 5px 0;
    cursor: pointer;
    color: #606060;
    font-weight: 500;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;
