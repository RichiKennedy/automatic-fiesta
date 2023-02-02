export const lightTheme = {
  body: "rgb(255, 243, 250)",
  text: "#000000",
  black: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  pinkish: "rgb(255, 243, 250)",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
  white: "#FFFFFF",
};
export const DarkTheme = {
  body: "#000000",
  text: "rgb(255, 243, 250)",
  fontFamily: "'Source Sans Pro', sans-serif",
  black: "#000000",
  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
};
export const breakpoints = {
  xs: 15,
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
