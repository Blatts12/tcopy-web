import "styled-components";

type FontSizes = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
  xl: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      black: string;
      white: string;
      accent: string;
      primary: string;
      background: string;
      warning: string;
    };
    breakpoints: {
      // https://zellwk.com/blog/media-query-units/
      phone: string;
      tablet_portrait: string;
      tablet_landscape: string;
      desktop: string;
      desktop_big: string;
      desktop_super_big: string;
    };
    fonts: {
      size: FontSizes;
    };
  }
}
