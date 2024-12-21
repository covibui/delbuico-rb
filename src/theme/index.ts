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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    lightCaps: React.CSSProperties;
    textSm: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    lightCaps?: React.CSSProperties;
    textSm?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lightCaps: true;
    textSm: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    lightCaps: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: "17px",
      textTransform: "uppercase",
    },
    textSm: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: "10px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "22px",
    },
    body2: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: "22px",
    },
    h1: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "24px",
    },
    h2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "18px",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: "20px",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "17px",
    },
  },
  palette: {
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
    MuiTypography: {
      styleOverrides: {
        h1: {},
      },
    },
  },
} as ThemeOptions);

export default theme;
