import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateList } from "../../../store/slices/listsSlice";

export const Lists = ({ title, cardId, id }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleOpenList = () => {
    setOpenUpdate(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateList({ cardId, listId: id, newTitle }));

    setOpenUpdate(false);
  };

  return (
    <StyledList>
      {openUpdate ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </form>
      ) : (
        <>
          <p>{title}</p>
          <MdOutlineEdit cursor={"pointer"} onClick={handleOpenList} />
        </>
      )}
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
  & > form {
    width: 100%;
    & > input {
      width: 180px;
      height: 30px;
      margin-left: -5px;
      border-radius: 6px;
      font-size: 16px;
      padding-left: 4px;
    }
  }
`;
