import React, { useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";
import useScrollBlock from "../hooks/useScrollBlock";

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
  width: 25%;
  min-width: 260px;

  padding: 0.45em 1em 2.5em 1em;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.palette.neutral[200]};

  background: ${({ theme }) => theme.palette.neutral[800]};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0 1.5em;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.size[700]};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.neutral[50]};
  font-size: ${({ theme }) => theme.fonts.size[600]};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.neutral[400]};
    cursor: pointer;
  }
`;

interface Props {
  children?: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeFunction: () => void;
}

const Modal: React.FC<Props> = ({ children, title, isOpen, closeFunction }) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) blockScroll();
    else allowScroll();
  }, [blockScroll, allowScroll, isOpen]);

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
