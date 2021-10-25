import styled from "styled-components";

export const ActionButton = styled.button`
  width: 100%;
  padding: 10px;

  letter-spacing: 0.05rem;
  font-size: ${({ theme }) => theme.fonts.size[600]};
  color: ${({ theme }) => theme.palette.neutral[100]};
  background: none;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.palette.primary[400]};
  transition: background-color 50ms ease;

  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.palette.primary[500]};
    cursor: pointer;
  }
`;

export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  padding: 3px 18px;

  font-size: ${({ theme }) => theme.fonts.size[400]};
  color: ${({ theme }) => theme.palette.neutral[100]};

  background: ${({ theme }) => theme.palette.accent[500]};
  border: none;
  border-radius: 24px;
  transition: outline-width 50ms linear;

  &:focus,
  &:hover {
    outline: 2px solid ${({ theme }) => theme.palette.primary[400]};
  }
`;
