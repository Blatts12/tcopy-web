import React from "react";
import { useToggle } from "react-use";
import styled from "styled-components";
import { ActionButton } from "../Button";

const LeftbarContainer = styled.div`
  grid-area: leftbar;
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding-right: 0.5em;

  text-align: right;
  border-right: 1px solid ${({ theme }) => theme.palette.neutral[400]};
`;

const ButtonConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideActionButton = styled(ActionButton)`
  margin-bottom: 1em;
`;

const Leftbar: React.FC = () => {
  const [openLogin, toggleOpenLogin] = useToggle(false);

  return (
    <LeftbarContainer>
      <ButtonConteiner></ButtonConteiner>
      <ButtonConteiner>
        <SideActionButton onClick={toggleOpenLogin}>
          Zaloguj się
        </SideActionButton>
        <SideActionButton>Stwórz konto</SideActionButton>
      </ButtonConteiner>
    </LeftbarContainer>
  );
};

export default Leftbar;
