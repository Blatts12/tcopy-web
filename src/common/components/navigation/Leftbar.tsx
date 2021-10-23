import React from "react";
import styled from "styled-components";

const LeftbarContainer = styled.div`
  grid-area: leftbar;
  position: sticky;
  top: 0px;
  z-index: 1;

  width: 100%;
  height: 100vh;
  padding-right: 8px;

  text-align: right;
  border-right: 1px solid ${({ theme }) => theme.palette.border};
`;

const Leftbar: React.FC = () => {
  return <LeftbarContainer>Leftbar</LeftbarContainer>;
};

export default Leftbar;
