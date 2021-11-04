import React from "react";
import { useToggle } from "react-use";
import LoginForm from "../../features/auth/LoginForm";
import RegisterForm from "../../features/auth/RegisterForm";
import Drawer from "./Drawer";

const UserPanel: React.FC = () => {
  const [openLogin, toggleLogin] = useToggle(false);
  const [openRegister, toggleRegister] = useToggle(false);

  return (
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
  );
};

export default UserPanel;
