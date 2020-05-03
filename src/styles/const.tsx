import { rem } from "polished";

export const transition = {
  cubicEaseInOut: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
};

export const color = {
  primary: {
    base: "#1b1b1b",
    light: "#a2a2a2",
  },
  secondary: {
    base: "#0068FF",
  },
};

export const rawSpace = {
  base: 16,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 64,
};
export const fontFamilyName = {
  roboto: "Roboto",
  robotoCondensed: "Roboto Condensed",
};
export const space = {
  base: rem(16),
  xxs: rem(4),
  xs: rem(8),
  sm: rem(12),
  md: rem(24),
  lg: rem(32),
  xl: rem(40),
  xxl: rem(64),
};

export const radius = {
  base: "2px",
  lg: "4px",
};

export const font = {
  weight: {
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
};

export const device = {
  mobile: 480,
  portraitTablet: 768,
  landscapeTablet: 1024,
  desktop: 1200,
};
