import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      background: string;
      backgroundAccent: string;
      font: string;
      fontMuted: string;
      primary: string;
      accent: string;
      border: string;
    };
    breakpoints: {
      small: string;
      normal: string;
      big: string;
      bigger: string;
    };
    fonts: {
      thin: string;
      normal: string;
      bold: string;
      size: {
        small: string;
        normal: string;
        big: string;
        bigger: string;
      };
    };
  }
}
