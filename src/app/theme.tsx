import React from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

const theme: DefaultTheme = {
  breakpoints: {
    phone: "37.438em",
    tablet_portrait: "37.5em",
    tablet_landscape: "56.26em",
    desktop: "75em",
    desktop_big: "112.5em",
    desktop_super_big: "150em",
  },
  fonts: {
    size: {
      100: "0.25rem",
      200: "0.5rem",
      300: "0.75rem",
      400: "1rem",
      500: "1.25rem",
      600: "1.5rem",
      700: "1.75rem",
      800: "2rem",
      900: "2.25rem",
      1000: "2.5rem",
      xl: "clamp(3rem, 10vw + 1rem, 10rem)",
    },
  },
  palette: {
    neutral: {
      50: "hsl(280, 10%, 100%)",
      100: "hsl(280, 10%, 90%)",
      200: "hsl(280, 10%, 80%)",
      300: "hsl(280, 10%, 70%)",
      400: "hsl(280, 10%, 60%)",
      500: "hsl(280, 10%, 50%)",
      600: "hsl(280, 10%, 40%)",
      700: "hsl(280, 10%, 30%)",
      800: "hsl(280, 10%, 20%)",
      900: "hsl(280, 10%, 10%)",
      1000: "hsl(280, 10%, 0%)",
    },
    accent: {
      50: "hsl(53, 100%, 100%)",
      100: "hsl(53, 100%, 90%)",
      200: "hsl(53, 100%, 80%)",
      300: "hsl(53, 100%, 70%)",
      400: "hsl(53, 100%, 60%)",
      500: "hsl(53, 100%, 50%)",
      600: "hsl(53, 100%, 40%)",
      700: "hsl(53, 100%, 30%)",
      800: "hsl(53, 100%, 20%)",
      900: "hsl(53, 100%, 10%)",
      1000: "hsl(53, 100%, 0%)",
    },
    primary: {
      50: "hsl(351, 100%, 100%)",
      100: "hsl(351, 100%, 90%)",
      200: "hsl(351, 100%, 80%)",
      300: "hsl(351, 100%, 70%)",
      400: "hsl(351, 100%, 60%)",
      500: "hsl(351, 100%, 50%)",
      600: "hsl(351, 100%, 40%)",
      700: "hsl(351, 100%, 30%)",
      800: "hsl(351, 100%, 20%)",
      900: "hsl(351, 100%, 10%)",
      1000: "hsl(351, 100%, 0%)",
    },
    background: {
      50: "hsl(212, 61%, 100%)",
      100: "hsl(212, 61%, 90%)",
      200: "hsl(212, 61%, 80%)",
      300: "hsl(212, 61%, 70%)",
      400: "hsl(212, 61%, 60%)",
      500: "hsl(212, 61%, 50%)",
      600: "hsl(212, 61%, 40%)",
      700: "hsl(212, 61%, 30%)",
      800: "hsl(212, 61%, 20%)",
      900: "hsl(212, 61%, 10%)",
      1000: "hsl(212, 61%, 0%)",
    },
  },
};

interface ThemeProps {
  children: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
      background: ${({ theme }) => theme.palette.background[900]};
      color: ${({ theme }) => theme.palette.neutral[50]};
      font-family: 'Raleway', sans-serif;
    }
    body {
      line-height: 1.5;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    li {
        margin: 0;
        padding: 0;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    #root {
      height: max(100%, auto);
    }
    
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    
`;
