import { useContext } from "react";
import * as styleComponents from "styled-components";

const {
  default: styled,
  css,
  ThemeContext,
  createGlobalStyle,
  ThemeProvider,
} = styleComponents;

const useTheme = () => useContext(ThemeContext);

export { css, useTheme, createGlobalStyle, ThemeProvider };
export default styled;
