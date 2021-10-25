import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.65);
`;

const ModalBody = styled.div`
  padding: 16px;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.palette.neutral[400]};

  background: rgba(255, 255, 255, 0.225);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.size[400]};
`;

const CloseButton = styled.button`
  margin-top: -6px;

  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.neutral[100]};
  font-size: ${({ theme }) => theme.fonts.size[400]};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.neutral[400]};
    cursor: pointer;
  }
`;

interface Props {
  title?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  closeFunction: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, closeFunction, title }) => {
  const modalRef = useRef(null);
  useClickAway(modalRef, () => {
    closeFunction();
  });

  if (!isOpen) return <></>;
  return (
    <ModalContainer>
      <ModalBody ref={modalRef}>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={closeFunction}>&#10005;</CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
