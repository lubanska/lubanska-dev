import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    palette: {
      flare: string;
      background: string;
      text: string;
    };
  }
}
