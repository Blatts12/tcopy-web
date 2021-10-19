import styled from "styled-components";

export const Avatar = styled.div`
  width: 42px;
  height: 42px;

  border: 2px solid ${({ theme }) => theme.palette.primary};
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.backgroundAccent};
`;