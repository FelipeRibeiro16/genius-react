import { styled } from "../../styles/styled";

export const MenuButton = styled("div", {
  cursor: "pointer",
  userSelect: "none",
  transition: "1 100ms linear",
  position: "relative",
  textAlign: "center",
  margin: "30px",
  textDecoration: "none",
  borderRadius: "0.25em",
  padding: "0.25em 0.25em",
  fontSize: "1.5em",
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
        border: "MidnightBlue 0.1em solid",
        boxShadow: "inset 0 0 0.5em 0 blue, 0 0 0.5em 0 blue",
        backgroundColor: "DodgerBlue",
        transition: "opacity 100ms linear",
        "&::before": {
          content: "",
          position: "absolute",
          background: "DodgerBlue",
          borderRadius: "0.25em",
          top: "100%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "perspective(1em) rotateX(40deg) scale(1, 0.30)",
          transition: "opacity 100ms linear",
          filter: "blur(1em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          borderRadius: "0.25em",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: "0 0 2em 0.5em blue",
          transition: "opacity 100ms linear",
        },
      },
      green: {
        border: "DarkGreen 0.1em solid",
        boxShadow: "inset 0 0 0.5em 0 DarkGreen, 0 0 0.5em 0 DarkGreen",
        backgroundColor: "MediumSeaGreen",
        transition: "opacity 100ms linear",
        color: "DarkGreen",
        textShadow:
          "0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em MediumSeaGreen",
        "&::before": {
          content: "",
          position: "absolute",
          background: "MediumSeaGreen",
          borderRadius: "0.25em",
          top: "100%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "perspective(1em) rotateX(40deg) scale(1, 0.30)",
          transition: "opacity 100ms linear",
          filter: "blur(1em)",
        },
        "&::after": {
          content: "",
          borderRadius: "0.25em",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: "0 0 2em 0.5em DarkGreen",
          transition: "opacity 100ms linear",
        },
      },
      yellow: {
        border: "DarkGoldenRod 0.1em solid",
        boxShadow: "inset 0 0 0.5em 0 DarkGoldenRod, 0 0 0.5em 0 DarkGoldenRod",
        backgroundColor: "Yellow",
        transition: "opacity 100ms linear",
        color: "DarkGoldenRod",
        textShadow: "0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em yellow",
        "&::before": {
          content: "",
          position: "absolute",
          background: "Yellow",
          borderRadius: "0.25em",
          top: "100%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "perspective(1em) rotateX(40deg) scale(1, 0.30)",
          transition: "opacity 100ms linear",
          filter: "blur(1em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          borderRadius: "0.25em",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: "0 0 2em 0.5em DarkGoldenRod",
          transition: "opacity 100ms linear",
        },
      },
      red: {
        border: "DarkRed 0.1em solid",
        boxShadow: "inset 0 0 0.5em 0 Maroon, 0 0 0.5em 0 Maroon",
        backgroundColor: "Red",
        transition: "opacity 100ms linear",
        color: "DarkRed",
        textShadow: "0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.45em Red",
        "&::before": {
          content: "",
          position: "absolute",
          background: "Red",
          borderRadius: "0.25em",
          top: "100%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "perspective(1em) rotateX(40deg) scale(1, 0.30)",
          transition: "opacity 100ms linear",
          filter: "blur(1em)",
        },
        "&::after": {
          content: "",
          position: "absolute",
          borderRadius: "0.25em",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxShadow: "0 0 2em 0.5em Maroon",
          transition: "opacity 100ms linear",
        },
      },
    },
  },
  "&bp1": {
    margin: "10px",
  },
});
