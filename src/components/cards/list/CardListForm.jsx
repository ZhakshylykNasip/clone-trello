import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addLists } from "../../../store/slices/listsSlice";

export const CardListForm = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const [listValue, setListValue] = useState("");

  const handleChange = (e) => {
    setListValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listValue.trim()) return;

    dispatch(addLists({ listValue, id }));
    onClose();
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <textarea
          name="input"
          id="input"
          placeholder="Ввести заголовок для этой карточки"
          value={listValue}
          onChange={handleChange}
        ></textarea>
        <div>
          <button type="submit">Добавить карточку</button>
          <RiCloseLargeLine cursor={"pointer"} onClick={onClose} />
        </div>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > textarea {
    width: 100%;
    padding: 5px;
    max-width: 180px;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    & > button {
      padding: 5px 8px;
      background-color: #064b84;
      width: fit-content;
      color: #fff;
      border: none;
      display: flex;
      align-items: center;
      gap: 7px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
