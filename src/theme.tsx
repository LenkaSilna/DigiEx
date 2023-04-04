import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // světlé téma
    light: {
      bg: "#FFFFFF",
      text: "#000000",
    },
    // tmavé téma
    dark: {
      bg: "#1A202C",
      text: "#FFFFFF",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
