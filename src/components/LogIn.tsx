import Logo from "@assets/del-buico-logo.svg";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const SITE_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD;

interface Props {
  onLogin(): void;
}

export default function LogIn({ onLogin }: Props) {
  console.log(SITE_PASSWORD);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const isSm = useMediaQuery((theme) => theme.breakpoints.between("sm", "lg"));

  const logoSize = isSm ? 400 : 300;

  return (
    <Stack
      spacing={4}
      sx={{
        height: 1,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: { xs: 300, sm: 500 },
        mx: "auto",
      }}
    >
      <Logo width={logoSize} height={logoSize} />
      <Stack
        spacing={2}
        sx={{
          width: 1,
        }}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (password === SITE_PASSWORD) {
            onLogin();
          } else {
            setPasswordError("Incorrect password");
          }
        }}
      >
        <TextField
          label="PASSWORD"
          type={showPassword ? "text" : "password"}
          value={password}
          error={Boolean(passwordError)}
          helperText={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: "16px",
                }}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </InputAdornment>
            ),
          }}
          sx={{ width: 1 }}
        />
        <Button type="submit">Log In</Button>
      </Stack>
    </Stack>
  );
}
