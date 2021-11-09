import React from "react";
import { useNavigate } from "react-router";
import Drawer from "../../common/components/Drawer";
import RegisterForm from "../../features/auth/RegisterForm";

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      zIndex={2}
      title="Stwórz konto"
      closeFunction={() => navigate("/user_panel")}
    >
      <RegisterForm closeFunction={() => navigate("/user_panel")} />
    </Drawer>
  );
};

export default Register;
