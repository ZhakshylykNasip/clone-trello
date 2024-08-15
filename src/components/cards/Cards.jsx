import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { CardsForm } from "./CardsForm";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "./list/CardList";
import { handleCloseCard, handleOpenCard } from "../../store/slices/listsSlice";

export const Cards = () => {
  const dispatch = useDispatch();
  const { card, isOpenCard } = useSelector((state) => state.lists);

 

  const openFormCardHandler = () => {
    dispatch(handleOpenCard());
  };
  const closeFormCardHandler = () => {
    dispatch(handleCloseCard());
  };

  return (
    <StyledContainer>
      <CardListWrapper>
        {card.map((item) => (
          <CardList key={item.id} card={item} />
        ))}
      </CardListWrapper>
      <div>{isOpenCard && <CardsForm onClose={closeFormCardHandler} />}</div>
      <div>
        <StyledButton onClick={openFormCardHandler}>
          <FaPlus />{" "}
          {card.length === 0 ? "Добавить список" : "Добавьте еще одну колонку"}
        </StyledButton>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 90%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const CardListWrapper = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 15px;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #064b84;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 9px;
  height: 40px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #003866;
    color: #fff;
    border: none;
  }
`;
