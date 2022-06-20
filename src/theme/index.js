// 1. Import the extendTheme function
import { extendTheme, theme as base } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

export const quoteTheme = extendTheme({
  colors: {
    primary: "#F0DC5B",
    secondary: "#A69C5D", // mudança de nome pois ocorreu um erro de digitação rs
    warning: "#f55aaa",
    footerDashboard: "#E1E1E1",
    tertiary: "#FFE32F",
  },
  fonts: {
    heading: `Raleway, sans-serif, ${base.fonts?.heading}`,
    body: `Raleway, sans-serif, ${base.fonts?.body}`,
  },
});
