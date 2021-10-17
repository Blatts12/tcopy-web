import React from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

const theme = {
  breakpoints: {
    small: "600px",
    normal: "1000px",
    big: "1200px",
    bigger: "1600px",
  },
  fonts: {
    thin: "eldo",
    normal: "string",
    bold: "string",
    size: {
      small: "0.85em",
      normal: "1em",
      big: "string",
      bigger: "string",
    },
  },
};

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
  ...theme,
};

const bright: DefaultTheme = {
  palette: {
    background: "black",
    backgroundAccent: "#01234C",
    font: "#F4FFFD",
    fontMuted: "#f4fffdb0",
    primary: "#F9DC5C",
    accent: "#ED254E",
    border: "#9BA8B7",
  },
  ...theme,
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

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      background: ${({ theme }) => theme.palette.background};
      color: ${({ theme }) => theme.palette.font};
      font-family: 'Raleway', sans-serif;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
    }

    
`;
