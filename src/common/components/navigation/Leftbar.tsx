import React from "react";
import styled from "styled-components";
import { ActionButton } from "../Button";

const LeftbarContainer = styled.div`
  grid-area: leftbar;
  position: sticky;
  top: 0px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding-right: 8px;

  text-align: right;
  border-right: 1px solid ${({ theme }) => theme.palette.border};
`;

const SideActionButton = styled(ActionButton)`
  margin-bottom: 10px;
`;

const Leftbar: React.FC = () => {
  return (
    <LeftbarContainer>
      <div></div>
      <div>
        <SideActionButton>Zaloguj się</SideActionButton>
        <SideActionButton>Stwórz konto</SideActionButton>
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
