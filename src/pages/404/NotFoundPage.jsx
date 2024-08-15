import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHomePageHndlr = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <section>
        <h1>404</h1>

        <h2>OOPS! PAGE NOT FOUND</h2>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem
        </p>
        <div className="container-buttons">
          <button onClick={navigateToHomePageHndlr}>return home</button>
          <button onClick={navigateToHomePageHndlr}>report problem</button>
        </div>
      </section>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(113, 181, 228);
  background: linear-gradient(
    96deg,
    rgba(113, 181, 228, 1) 0%,
    rgba(136, 123, 216, 1) 58%,
    rgba(130, 153, 208, 1) 97%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  & > section {
    width: 70%;
    height: 70%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 20px;

    & > h1 {
      font-size: 10rem;
      color: #9497ce;
    }

    & > h2 {
      font-size: 4rem;
      color: #b38ccd;
    }
    & > p {
      font-size: 2rem;
      width: 70%;
      text-align: center;
      font-weight: 700;
      color: #7a9fcc;
    }
    .container-buttons {
      display: flex;
      gap: 30px;
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
        border: 1px solid #064b84;
        &:hover {
          background-color: #064b84;
          color: #fff;
          border: none;
        }
      }
    }
  }
`;
