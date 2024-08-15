import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdBusiness } from "react-icons/io";
import styled from "styled-components";
import { CardListForm } from "./CardListForm";
import { Lists } from "./Lists";
import { BsThreeDots } from "react-icons/bs";
import { CardInfo } from "./CardInfo";

export const CardList = ({ card }) => {
  const [openListForm, setOpenListForm] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const openCloseInfo = () => {
    setOpenInfo((state) => !state);
  };

  const handleOpenAndCloseList = () => {
    setOpenListForm((state) => !state);
  };
  return (
    <StyledCardList>
      <div>
        <p>{card.title}</p>
        <StyledDottedIcon cursor={"pointer"} onClick={openCloseInfo} />

        {openInfo && (
          <>
            <CardInfo
              onClose={openCloseInfo}
              id={card.id}
              onOpenListHandler={handleOpenAndCloseList}
            />
            <Backdrop onClick={openCloseInfo} />{" "}
          </>
        )}
      </div>

      {card.list.length > 0 && (
        <ul>
          {card.list.map((item) => (
            <Lists key={item.id} {...item} />
          ))}
        </ul>
      )}

      {openListForm ? (
        <CardListForm onClose={handleOpenAndCloseList} id={card.id} />
      ) : (
        <section>
          <div onClick={handleOpenAndCloseList}>
            <FiPlus />
            <span> Добавить карточку</span>
          </div>
          <IoMdBusiness />
        </section>
      )}
    </StyledCardList>
  );
};

const StyledCardList = styled.li`
  width: 200px;
  min-height: 100px;
  height: fit-content;
  padding: 10px;
  margin-left: 20px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    & > p {
      font-size: 18px;
      font-weight: 700;
    }
  }
  & > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 2px;
      & > span {
        font-size: 15px;
      }
    }
  }
`;

const StyledDottedIcon = styled(BsThreeDots)(() => ({
  fontWeight: "bold",
  fontSize: "1.8rem",
  cursor: "pointer",
  "&:hover": {
    background: "#d8d8d8",
    borderRadius: "5px",
  },
}));

const Backdrop = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
