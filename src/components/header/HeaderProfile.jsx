import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ImInfo } from "react-icons/im";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import { ModalUI } from "../UI/ModalUI";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCards } from "../../store/slices/listsSlice";

export const HeaderProfile = () => {
  const dispatch = useDispatch();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchCard, setSearchCard] = useState("");
  const { card } = useSelector((state) => state.lists);

  const toggleLoginVisibility = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  const toggleModalHandler = () => {
    if (isOpenModal) {
      setIsOpenLogin(false);
    }
    setIsOpenModal(!isOpenModal);
  };

  const searchCardChange = (e) => {
    const value = e.target.value;
    setSearchCard(value);
    const filteredCards = card.filter((card) =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setFilteredCards(filteredCards));
  };

  const logOutHandler = () => {
    window.location.pathname = "/login";
    return localStorage.removeItem("auth");
  };

  return (
    <StyledContainer>
      <input
        type="text"
        placeholder="  Поиск"
        onChange={searchCardChange}
        value={searchCard}
      />
      <section>
        <MdOutlineNotificationsActive />
        <ImInfo />
        <CgProfile onClick={toggleLoginVisibility} />

        {isOpenLogin && (
          <div onClick={toggleModalHandler}>
            <TbLogout />
            <p>log out</p>

            {isOpenModal && (
              <ModalUI onClose={toggleModalHandler}>
                <StyledModalContent>
                  <h2>Вы точно хотите выйти?</h2>
                  <div>
                    <button className="btn" onClick={logOutHandler}>
                      Да
                    </button>
                    <button onClick={toggleModalHandler}>Нет</button>
                  </div>
                </StyledModalContent>
              </ModalUI>
            )}
          </div>
        )}
      </section>
    </StyledContainer>
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
const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  & > input {
    background-color: #333;
    border: 1px solid #fff;
    width: 250px;
    color: #fff;
    font-size: 18px;
    padding: 0 5px 0 5px;
    border-radius: 8px;
  }

  & > section {
    display: flex;
    color: #fff;
    font-size: xx-large;
    gap: 20px;
    cursor: pointer;
    position: relative;

    & > div {
      width: 200px;
      padding: 10px;
      display: flex;
      align-items: center;
      border: 1px solid gray;
      color: gray;
      gap: 10px;
      font-size: xx-large;
      background-color: #fff;
      border-radius: 8px;
      position: absolute;
      right: 20px;
      top: 40px;

      &:hover {
        background-color: gray;
        color: #fff;
      }
      & > p {
        font-size: 20px;
      }
    }
  }
`;
