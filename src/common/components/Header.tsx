import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;

  padding: 10px;
  z-index: 1;

  background: ${({ theme }) => theme.palette.background[900]};
  border-width: 0 0px 2px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

interface Props {
  children: string;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <HeaderContainer>
      <h3>{children}</h3>
    </HeaderContainer>
  );
};

export default Header;
