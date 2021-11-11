import React from "react";
import { useLocation, useNavigate } from "react-router";
import Drawer from "../../common/components/Drawer";
import RegisterForm from "../../features/auth/RegisterForm";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const from = "/user_panel";

  return (
    <Drawer
      zIndex={2}
      title="Stwórz konto"
      closeFunction={() => navigate(from)}
    >
      <RegisterForm closeFunction={() => navigate(from)} />
    </Drawer>
  );
};

export default Register;
