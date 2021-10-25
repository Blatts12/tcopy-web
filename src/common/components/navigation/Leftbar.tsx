import React from "react";
import { useToggle } from "react-use";
import styled from "styled-components";
import { ActionButton } from "../Button";
import Modal from "../Modal";

const LeftbarContainer = styled.div`
  grid-area: leftbar;
  position: sticky;
  top: 0px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding-right: 8px;

  text-align: right;
  border-right: 1px solid ${({ theme }) => theme.palette.neutral[400]};
`;

const SideActionButton = styled(ActionButton)`
  margin-bottom: 10px;
`;

const Leftbar: React.FC = () => {
  const [openLogin, toggleOpenLogin] = useToggle(false);

  return (
    <LeftbarContainer>
      <div></div>
      <div>
        <Modal isOpen={openLogin} closeFunction={toggleOpenLogin} title="Login">
          <input type="text" placeholder="ELDO" />
          <input type="text" placeholder="ELDO" />
          <input type="text" placeholder="ELDO" />
          <input type="text" placeholder="ELDO" />
        </Modal>
        <SideActionButton onClick={toggleOpenLogin}>
          Zaloguj się
        </SideActionButton>
        <SideActionButton>Stwórz konto</SideActionButton>
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
