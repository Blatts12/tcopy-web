import React from "react";
import Modal from "../../common/components/Modal";
import LoginForm from "./LoginForm";

interface Props {
  isOpen: boolean;
  closeFunction: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, closeFunction }) => {
  return (
    <Modal title="Login" isOpen={isOpen} closeFunction={closeFunction}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
