import React from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

const dark: DefaultTheme = {
  palette: {
    background: "#011936",
    backgroundAccent: "#01234C",
    font: "#F4FFFD",
    fontMuted: "#f4fffdb0",
    primary: "#F9DC5C",
    accent: "#ED254E",
    border: "#9BA8B7",
  },
};

const bright: DefaultTheme = {
  palette: {
    background: "red",
    backgroundAccent: "#01234C",
    font: "#F4FFFD",
    fontMuted: "#f4fffdb0",
    primary: "#F9DC5C",
    accent: "#ED254E",
    border: "#9BA8B7",
  },
};

interface ThemeProps {
  children: React.ReactNode;
  darkTheme: boolean;
}

export const Theme: React.FC<ThemeProps> = ({ children, darkTheme }) => (
  <ThemeProvider theme={darkTheme ? dark : bright}>{children}</ThemeProvider>
);

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    p {
        margin: 0;
    }

    body {
      background: ${(props) => props.theme.palette.background};
      color: ${(props) => props.theme.palette.font};
      font-family: 'Raleway', sans-serif;
    }
`;
