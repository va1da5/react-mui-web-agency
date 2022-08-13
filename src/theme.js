import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const defaultTheme = createTheme({});

const { breakpoints } = defaultTheme;

export const theme = createTheme({
  palette: {
    // https://material.io/resources/color/#!
    primary: {
      main: "#fcaf3b",
      light: "#ffe16c",
      dark: "#c48000",
      contrastText: "#000",
    },
    secondary: {
      main: "#ab641d",
      light: "#e1924a",
      dark: "#773900",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 15,
    fontSize: 14,
    h1: {
      // fontSize: "4.4rem",
      fontWeight: 600,
      lineHeight: "1.3em",
      letterSpacing: 0,
      [breakpoints.up("md")]: {
        fontSize: "4.4rem",
      },
      [breakpoints.down("md")]: {
        fontSize: "3.4rem",
      },

      [breakpoints.down("sm")]: {
        fontSize: "2.4rem",
      },
    },
    h2: {
      // fontSize: "2.88rem",
      [breakpoints.up("md")]: {
        fontSize: "2.88rem",
      },
      [breakpoints.down("md")]: {
        fontSize: "1.88rem",
      },
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 3,
          fontWeight: 600,
          boxShadow: "none",
          padding: "12px 22px",
          ":hover": {
            boxShadow: "none",
            color: grey[50],
            fontWeight: 600,
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: grey[900],
            border: `2px solid ${grey[900]}`,
            padding: "10px 22px",
            ":hover": {
              backgroundColor: grey[900],
              color: grey[50],
              border: `2px solid ${grey[900]}`,
            },
          },
        },
      ],
    },
  },
});
