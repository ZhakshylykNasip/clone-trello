import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/trello_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../store/thunks/authThunk";
import { ErrorMessage } from "../UI/ErrorMessage";
import { Loading } from "../UI/Loading";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (userData) => {
    if (userData) {
      userData.role = "ADMIN";
    }
    dispatch(signInRequest({ userData, navigate }));
  };
  return (
    <>
      {isLoading && <Loading />}
      <StyledContainer>
        <StyledLogoContainer>
          <img src={LogoImage} alt="" />
          <h1>Trello</h1>
        </StyledLogoContainer>
        <form onSubmit={handleSubmit(submitHandler)}>
          <h3>Вход в Trello </h3>
          <div>
            <article>
              <input
                type="text"
                placeholder="Укажите адрес электронной почты "
                {...register("email", {
                  required: {
                    value: true,
                    message: "введите email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                    message: "не правильно введен email",
                  },
                })}
              />
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            </article>
            <article>
              <input
                type="password"
                placeholder="Введите пароль "
                {...register("password", {
                  required: {
                    value: true,
                    message: "введите password mister",
                  },
                  minLength: {
                    value: 6,
                    message: "пароль должен быть не менее 6 симолов",
                  },
                  maxLength: {
                    value: 15,
                    message: "не балуйся а то забудешь пароль ",
                  },
                })}
              />
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </article>

            <button type="submit">Продолжить</button>
          </div>
          <section>
            <p>не удается войти?</p>
            <Link to={"/register"}>Зарегистрировать аккаунт</Link>
          </section>
        </form>
      </StyledContainer>
    </>
  );
};

const StyledLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & > h1 {
    font-size: 5rem;
    color: #064b84;
  }
  & > img {
    width: 80px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c5c5c5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
  }

  & > form {
    width: 500px;
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border-radius: 15px;
    & > h3 {
      color: gray;
      font-size: 29px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 18px;
      width: 100%;
      border-bottom: 3px solid gray;
      padding-bottom: 30px;

      & > article {
        height: 75px;

        & > input {
          width: 100%;
          height: 50px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 500;
          padding-left: 10px;
          margin-bottom: 5px;
        }
      }
      & > button {
        background-color: green;
        height: 60px;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        font-size: 19px;
        font-weight: bold;
      }
    }
    & > section {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`;
