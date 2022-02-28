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
  padding: "5px 20px 5px 20px",
  gridTemplateAreas: `'green red' 
                       'yellow blue'`,
  gridGap: "1.5%",

  border: "1px solid black",
  backgroundColor: "black",
  borderRadius: "100%",
  width: "38rem",
  height: "38rem",
  "@bp1": {
    padding: "20px 5px 20px 5px",
    width: "18rem",
    height: "18rem",
  },
});

export const RowContainer1 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "stretch",
  width: "auto",
  "@bp1": {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const ColumnContainer1 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
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
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  height: "auto",
  "@bp1": {
    flexDirection: "column-reverse",
  },
});

export const ColumnContainer2 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "space-between",
});

export const RowContainer3 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "stretch",
  padding: "0px 0px 80px 0px",
  "@bp1": {
    padding: "0px",
  },
});

export const RowContainer4 = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  padding: "0px 0px 0px 0px",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "auto",
  "@bp1": {
    padding: "40px 0px 0px 0px",
  },
});
