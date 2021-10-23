import styled from "styled-components";

export const ActionButton = styled.button`
  width: 100%;
  padding: 10px;

  letter-spacing: 0.05rem;
  font-size: ${({ theme }) => theme.fonts.size.big};
  color: ${({ theme }) => theme.palette.font};
  background: none;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.palette.primary};
  transition: background-color 50ms ease;

  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.palette.primary}4A;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  padding: 3px 18px;

  font-size: ${({ theme }) => theme.fonts.size.normal};
  color: ${({ theme }) => theme.palette.font};

  background: ${({ theme }) => theme.palette.accent};
  border: none;
  border-radius: 24px;
  transition: outline-width 50ms linear;

  &:focus,
  &:hover {
    outline: 2px solid ${({ theme }) => theme.palette.primary};
  }
`;
