import { styled } from "@stitches/react";

export const GeniusButton = styled("div", {
  cursor: "pointer",
  userSelect: "none",
  background: "transparent",
  transition: "1 100ms linear",
  position: "relative",
  variants: {
    OnOff: {
      on: {
        opacity: 1,
        "&::before": {
          opacity: 1,
        },
        "&::after": {
          opacity: 1,
        },
      },
      off: {
        opacity: 0.5,
        "&::before": {
          opacity: 0,
        },
        "&::after": {
          opacity: 0,
        },
      },
    },
    ButtonColor: {
      blue: {
        gridArea: "blue",
        border: "MidnightBlue 0.25em solid",
        boxShadow: "inset 0 0 0.5em 0 blue, 0 0 0.5em 0 blue",
        backgroundColor: "DodgerBlue",
        borderBottomRightRadius: "100%",
        transition: "opacity 100ms linear",
        "&::before": {
          content: "",
          position: "absolute",
          background: "DodgerBlue",
          top: "0%",
          left: "0%",
          width: "105%",
          height: "105%",
          borderBottomRightRadius: "100%",
          transform: "perspective(5em)",
          filter: "blur(2em)",
          transition: "opacity 100ms linear",
        },
        "&::after": {
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderBottomRightRadius: "100%",
          boxShadow: "inset 0 0 2em 0.5em blue",
          transition: "opacity 100ms linear",
        },
      },
      green: {
        gridArea: "green",
        border: "DarkGreen 0.25em solid",
        boxShadow: "inset 0 0 0.5em 0 DarkGreen, 0 0 0.5em 0 DarkGreen",
        backgroundColor: "MediumSeaGreen",
        borderTopLeftRadius: "100%",
        transition: "opacity 100ms linear",
        "&::before": {
          content: "",
          position: "absolute",
          background: "MediumSeaGreen",
          top: "-5%",
          left: "-5%",
          width: "105%",
          height: "105%",
          borderTopLeftRadius: "100%",
          transform: "perspective(5em)",
          transition: "opacity 100ms linear",
          filter: "blur(2em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "100%",
          boxShadow: "inset 0 0 2em 0.5em DarkGreen",
          transition: "opacity 100ms linear",
        },
      },
      yellow: {
        gridArea: "yellow",
        border: "DarkGoldenRod 0.25em solid",
        boxShadow: "inset 0 0 0.5em 0 DarkGoldenRod, 0 0 0.5em 0 DarkGoldenRod",
        backgroundColor: "Yellow",
        borderBottomLeftRadius: "100%",
        transition: "opacity 100ms linear",
        "&::before": {
          content: "",
          position: "absolute",
          background: "Yellow",
          top: "0%",
          left: "-5%",
          width: "105%",
          height: "105%",
          borderBottomLeftRadius: "100%",
          transform: "perspective(5em)",
          transition: "opacity 100ms linear",
          filter: "blur(2em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: "100%",
          boxShadow: "inset 0 0 2em 0.6em DarkGoldenRod",
          transition: "opacity 100ms linear",
        },
      },
      red: {
        gridArea: "red",
        border: "DarkRed 0.25em solid",
        boxShadow: "inset 0 0 0.5em 0 Maroon, 0 0 0.5em 0 Maroon",
        backgroundColor: "Red",
        borderTopRightRadius: "100%",
        transition: "opacity 100ms linear",
        "&::before": {
          content: "",
          position: "absolute",
          background: "Red",
          top: "-5%",
          left: "0%",
          width: "105%",
          height: "105%",
          borderTopRightRadius: "100%",
          transform: "perspective(5em)",
          transition: "opacity 100ms linear",
          filter: "blur(2em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderTopRightRadius: "100%",
          boxShadow: "inset 0 0 2em 0.5em Maroon",
          transition: "opacity 100ms linear",
        },
      },
    },
  },
});
