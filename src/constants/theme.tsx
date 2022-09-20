import { DefaultTheme } from "styled-components";

const winter: DefaultTheme = {
  colors: {
    primary: "#070B26",
    secondary: "#6695F2",
    base: "#EBF2F2",
    outline: "#77ACF2",
    point: "#F24141",
  },
};

const spring: DefaultTheme = {
  colors: {
    primary: "#F29F05",
    secondary: "#F2B705",
    base: "#F2F2F2",
    outline: "#F2D680",
    point: "#01401C",
  },
};

const summer: DefaultTheme = {
  colors: {
    primary: "#98D4CF",
    secondary: "#D9F0FA",
    base: "#3771BF",
    outline: "#F5FFFF",
    point: "#FFFFB5",
  },
};

const fall: DefaultTheme = {
  colors: {
    primary: "#A63F03",
    secondary: "#D97904",
    base: "#F29F05",
    outline: "#F2F2F2",
    point: "#8C0327",
  },
};

export { winter, spring, summer, fall };
