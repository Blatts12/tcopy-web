import React from "react";
import styled from "styled-components";

const RightbarContainer = styled.div`
  grid-area: rightbar;
  position: sticky;
  top: 0px;
  z-index: 1;

  width: 100%;
  height: 100vh;
  padding-left: 8px;

  border-left: 1px solid ${({ theme }) => theme.palette.neutral[400]};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Rightbar: React.FC = () => {
  return <RightbarContainer>Rightbar</RightbarContainer>;
};

export default Rightbar;
