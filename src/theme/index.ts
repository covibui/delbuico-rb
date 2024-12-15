import { createTheme, ThemeOptions } from "@mui/material";
import palette from "./palette";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    tag: true;
  }

  interface ChipPropsColorOverrides {
    white: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: "light",
    background: {
      default: palette.beige.BG,
      paper: palette.beige.B1,
    },
    text: {
      primary: "#000",
      secondary: "rgba(0,0,0,0.4)",
    },
    primary: {
      main: palette.beige.B4,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: theme.unstable_sx({
          boxShadow: "none",
          "&:hover, &:focus, &:active": {
            boxShadow: "none",
          },
        }),
        containedPrimary: {
          color: theme.palette.common.white,
        },
      },
    },
    MuiChip: {
      styleOverrides: theme.unstable_sx({
        root: {
          borderRadius: 2,
        },
      }),
      variants: [
        {
          props: { variant: "tag" },
          style: {
            "&:nth-of-type(4n+1)": {
              backgroundColor: palette.beige.B1,
            },
            "&:nth-of-type(4n+2)": {
              backgroundColor: palette.beige.B2,
            },
            "&:nth-of-type(4n+3)": {
              backgroundColor: palette.beige.B3,
            },
            "&:nth-of-type(4n+4)": {
              backgroundColor: palette.beige.B4,
            },
            color: palette.black,
          },
        },
        {
          props: { color: "white" },
          style: {
            backgroundColor: palette.white,
            color: palette.black,
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: theme.unstable_sx({
          px: 1.25,
          [theme.breakpoints.up("sm")]: {
            px: 2,
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
} as ThemeOptions);

export default theme;
