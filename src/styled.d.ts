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
  }
}
