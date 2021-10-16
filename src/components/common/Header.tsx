import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 45px;
  padding: 10px;
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
      <h3>{children}</h3>
    </HeaderContainer>
  );
};

export default Header;
