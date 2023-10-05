import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    green: {
      "900": "#6FDC8C",
    },
    blue: {
      "900": "#0043ce",
    },
    gray: {
      "900": "#878D96",
      "500": "#DDE1E6",
    },
  },
  fonts: {
    heading: "GeneralSans-Bold",
    body: "GeneralSans-Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
