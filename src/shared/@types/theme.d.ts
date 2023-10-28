import { Theme, ThemeOptions } from "@mui/material/styles";

import type { CustomThemes } from "providers/theme";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  interface CustomTheme extends Theme, CustomThemes {}
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {}

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}
