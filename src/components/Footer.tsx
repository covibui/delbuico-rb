import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: {
          xs: 1.25,
          sm: 2,
        },
      }}
    >
      <Typography>&copy; Copyright {new Date().getFullYear()}</Typography>
      <Typography>
        <Link href="/admin/index.html" underline="none">
          Admin
        </Link>
      </Typography>
    </Box>
  );
}
