import "styled-components";

type Colors = {
  50: string;
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
};

type FontSize = {
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
      neutral: Colors;
      accent: Colors;
      primary: Colors;
      background: Colors;
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
      size: FontSize;
    };
  }
}
