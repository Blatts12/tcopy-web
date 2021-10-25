import styled from "styled-components";

export const ActionButton = styled.button`
  width: 100%;
  padding: 0.75em;

  letter-spacing: 0.04em;
  font-size: ${({ theme }) => theme.fonts.size[400]};
  color: ${({ theme }) => theme.palette.neutral[100]};
  background: none;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.palette.primary[400]};
  transition: background-color 50ms ease;

  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.palette.primary[700]};
    cursor: pointer;
  }
`;

export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  padding: 0.4rem 1rem;

  font-size: ${({ theme }) => theme.fonts.size[400]};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.neutral[900]};

  background: ${({ theme }) => theme.palette.accent[400]};
  border: none;
  border-radius: 24px;
  transition: background-color 150ms linear;

  &:focus,
  &:hover {
    outline: none;
    background: ${({ theme }) => theme.palette.primary[500]};
    color: ${({ theme }) => theme.palette.neutral[50]};
  }
`;
