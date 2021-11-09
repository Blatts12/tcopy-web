import React from "react";
import { useNavigate } from "react-router";
import Drawer from "../../common/components/Drawer";
import LoginForm from "../../features/auth/LoginForm";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      zIndex={2}
      title="Zaloguj się"
      closeFunction={() => navigate("/user_panel")}
    >
      <LoginForm closeFunction={() => navigate("/user_panel")} />
    </Drawer>
  );
};

export default Login;
