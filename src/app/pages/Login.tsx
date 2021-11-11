import React from "react";
import { useLocation, useNavigate } from "react-router";
import Drawer from "../../common/components/Drawer";
import LoginForm from "../../features/auth/LoginForm";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/user_panel";

  return (
    <Drawer zIndex={2} title="Zaloguj się" closeFunction={() => navigate(from)}>
      <LoginForm closeFunction={() => navigate(from)} />
    </Drawer>
  );
};

export default Login;
