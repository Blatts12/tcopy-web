import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 15px;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.border};
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.palette.border};
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
