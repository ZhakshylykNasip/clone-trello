import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCard } from "../../store/slices/listsSlice";
import { useForm } from "react-hook-form";

export const CardsForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitCardsHandler = (data) => {
    if (data) {
      data.id = Date.now();
      data.list = [];
    }

    dispatch(addCard(data));
    onClose();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submitCardsHandler)}>
      <section>
        <input
          type="text"
          placeholder="Добавить список"
          {...register("title", {
            required: {
              value: true,
              message: "Заполните поле",
            },
          })}
        />
        <StyledErrorMessage>{errors?.title?.message}</StyledErrorMessage>
      </section>

      <div>
        <StyledButton type="submit">Добавить список </StyledButton>
        <RiCloseLargeLine cursor={"pointer"} onClick={onClose} />
      </div>
    </StyledForm>
  );
};

const StyledErrorMessage = styled.span`
  color: red;
  font-size: 13px;
`;

const StyledForm = styled.form`
  width: 200px;
  height: 110px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  & > section {
    height: 50px;
    & > input {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      border-radius: 5px;
      border: 1px solid gray;
    }
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledButton = styled.button`
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
`;
