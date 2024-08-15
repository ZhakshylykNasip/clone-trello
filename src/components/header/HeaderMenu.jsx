import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import styled from "styled-components";
import { headerMenuContent } from "../../utils/constants/general";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { handleOpenCard } from "../../store/slices/listsSlice";

export const HeaderMenu = () => {
  const dispatch = useDispatch();
  return (
    <StyledHeaderMenu>
      <CgMenuGridO color="white" fontSize={34} />
      <section>
        <FaTrello color="white" fontSize={33} />
        <h2>TRELLO</h2>
      </section>
      <article>
        {headerMenuContent.map((menuItem) => (
          <div className="menu-content" key={menuItem.id}>
            <span>{menuItem.title}</span>
            <HiChevronDown fontSize={28} />
          </div>
        ))}
      </article>
      <button className="addBtn" onClick={() => dispatch(handleOpenCard())}>
        Создать
      </button>
    </StyledHeaderMenu>
  );
};
const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;

  & > section {
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
    cursor: pointer;
  }
  & > article {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    margin-left: 20px;
    font-size: 17px;

    .menu-content {
      display: flex;
      align-items: center;
      padding: 4px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: gray;
        transition: all 0.1s ease-in-out;
      }
    }
  }
  .addBtn {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
    border: none;
    color: #fff;
    background-color: #064b84;
    transition: all 0.2s ease-in;
    &:hover {
      background-color: #01457c;
    }
  }
`;
