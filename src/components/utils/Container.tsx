import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <DivContainer>{children}</DivContainer>;
};

export default Container;