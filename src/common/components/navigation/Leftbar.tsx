import React, { useMemo } from "react";
import { useToggle } from "react-use";
import styled from "styled-components";
import { logout } from "../../../features/auth/authActions";
import LoginModal from "../../../features/auth/LoginModal";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { ActionButton } from "../input/Button";

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

const Leftbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [openLogin, toggleOpenLogin] = useToggle(false);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then((result) => {
        console.log("logout");
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  const userButtons = useMemo(() => {
    if (auth.authenticated && auth.token) {
      return (
        <>
          <span>Logged as {auth.user.user_tag}</span>
          <ActionButton onClick={handleLogout}>Wyloguj się</ActionButton>
        </>
      );
    }
    return (
      <>
        <ActionButton onClick={toggleOpenLogin}>Zaloguj się</ActionButton>
        <ActionButton>Stwórz konto</ActionButton>
      </>
    );
  }, [auth]);

  return (
    <LeftbarContainer>
      <LoginModal isOpen={openLogin} closeFunction={toggleOpenLogin} />
      <ButtonConteiner>
        <ActionButton>Profile</ActionButton>
        <ActionButton>TBD</ActionButton>
      </ButtonConteiner>
      <ButtonConteiner>{userButtons}</ButtonConteiner>
    </LeftbarContainer>
  );
};

export default Leftbar;
