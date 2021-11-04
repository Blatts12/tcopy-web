import React, { useCallback, useMemo } from "react";
import { useToggle } from "react-use";
import { logoutUser } from "../../features/auth/authActions";
import LoginForm from "../../features/auth/LoginForm";
import RegisterForm from "../../features/auth/RegisterForm";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import Drawer from "./Drawer";

const UserPanel: React.FC = () => {
  const { user, authenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openLogin, toggleLogin] = useToggle(false);
  const [openRegister, toggleRegister] = useToggle(false);

  const unauthUser = useMemo(
    () => (
      <>
        <Drawer
          title="Zaloguj się"
          open={openLogin}
          closeFunction={toggleLogin}
          zIndex={1}
        >
          <LoginForm />
        </Drawer>
        <Drawer
          title="Stwórz konto"
          open={openRegister}
          closeFunction={toggleRegister}
          zIndex={1}
        >
          <RegisterForm />
        </Drawer>
        <button
          className="button button--action button--big"
          onClick={toggleLogin}
        >
          Zaloguj
        </button>
        <button
          className="button button--action button--big"
          onClick={toggleRegister}
        >
          Stwórz konto
        </button>
      </>
    ),
    [toggleLogin, toggleRegister, openLogin, openRegister]
  );

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const authUser = useMemo(
    () => (
      <>
        <span>{`Witaj, ${user.user_tag}`}</span>
        <button
          className="button button--action button--big"
          onClick={handleLogout}
        >
          Wyloguj się
        </button>
      </>
    ),
    [handleLogout, user]
  );

  return <>{authenticated ? authUser : unauthUser}</>;
};

export default UserPanel;
