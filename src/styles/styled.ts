import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  media: {
    bp1: "(max-width: 727px)",
  },
});

export const GameContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
  backgroundColor: "black",
  justifyContent: "space-around",
  alignItems: "center",
  "@bp1": {
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
  },
});

export const Genius = styled("div", {
  display: "grid",
  padding: "5px",
  gridTemplateAreas: `'green red' 
                       'yellow blue'`,
  gridGap: "1.5%",

  border: "1px solid black",
  backgroundColor: "black",
  borderRadius: "100%",
  width: "14rem",
  height: "14rem",
  "@bp1": {
    width: "16rem",
    height: "17rem",
  },
});

export const RowContainer1 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "5px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  "@bp1": {
    display: "flex",
    flexWrap: "nowrap",
    padding: "5px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
  },
});

export const ColumnContainer1 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "5px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  "@bp1": {
    display: "flex",
    flexWrap: "nowrap",
    padding: "5px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
});

export const RowContainer2 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "5px",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  "@bp1": {
    flexDirection: "column-reverse",
  },
});

export const ColumnContainer2 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "5px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const RowContainer3 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "5px",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
});

export const RowContainer4 = styled("div", {
  "@bp1": {
    display: "flex",
    flexWrap: "nowrap",
    padding: "5px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
});
