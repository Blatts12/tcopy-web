import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 15px;
  border-width: 0 1px 2px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
`;

interface Props {
  children: string;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <HeaderContainer>
      <h2>{children}</h2>
    </HeaderContainer>
  );
};

export default Header;
