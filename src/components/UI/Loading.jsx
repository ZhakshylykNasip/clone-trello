import { RingLoader } from "react-spinners";
import styled from "styled-components";

export const Loading = () => {
  return (
    <StyledLoader>
      <RingLoader size={260} color="#064b84" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #808080ab;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
