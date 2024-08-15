import styled from "styled-components";
import { Header } from "../components/header/Header";
import BgImage from "../assets/images/trello_bg-image.webp";
import { Cards } from "../components/cards/Cards";

export const MainLayout = () => {
  return (
    <StyledLayout $bgImg={BgImage}>
      <Header />

      <Cards />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  height: 100vh;
  background-image: url(${({ $bgImg }) => $bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`;
