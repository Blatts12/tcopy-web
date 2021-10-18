import styled from "styled-components";

export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  min-width: 50px;
  padding: 3px 18px;

  font-size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.palette.font};
  background: ${({ theme }) => theme.palette.accent};
  border: none;
  border-radius: 8px;
  transition: outline-width 50ms linear;

  &:focus,
  &:hover {
    outline: 2px solid ${({ theme }) => theme.palette.primary};
  }
`;
