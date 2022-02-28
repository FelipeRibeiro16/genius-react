import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  body: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
});

export default globalStyles;
