// here we will create light and dark theme valiables

export const lightTheme = {
  body: "rgb(255, 243, 250)",
  text: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  //rgb(255, 243, 250)
  pinkish: "rgb(255, 243, 250)",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};
export const DarkTheme = {
  body: "#000000",
  // text: "#FCF6F4",
  // text: "rgb(245, 235, 245)",
  text: "rgb(255, 243, 250)",
  fontFamily: "'Source Sans Pro', sans-serif",

  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
};
// bottega green
//rgb(0, 150, 57)

// whitish
//#FCF6F4

// black
//#000000

//pinkish
//rgb(245, 235, 245)

//new pinkish
//rgb(255, 243, 250)
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
