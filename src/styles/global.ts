import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  body: {
    boxSizing: "border-box",
  },
});

export default globalStyles;
