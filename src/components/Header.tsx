import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "@assets/del-buico-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import pluralize from "@utils/pluralize";

interface Props {
  title: string;
  itemCount?: number;
  backLink?: string;
}

export default function Header({ title, itemCount, backLink }: Props) {
  const isSm = useMediaQuery((theme) => theme.breakpoints.between("sm", "lg"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const logoSize = isLg ? 200 : isSm ? 110 : 65;

  return (
    <Stack
      id="header"
      component="header"
      spacing={2}
      sx={{
        alignItems: "center",
        pt: {
          xs: 1.25,
          sm: 2,
          lg: 4,
        },
        pb: 2,
      }}
    >
      <Link href="/">
        <Logo width={logoSize} height={logoSize} />
      </Link>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          width: 1,
          gridTemplateColumns: "1fr 2fr 1fr",
          gridTemplateAreas: '"back title extra"',
        }}
      >
        {backLink && (
          <IconButton
            href={backLink}
            sx={{ flexGrow: 0, placeSelf: "start", width: 40, height: 40 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} fixedWidth size="xs" />
          </IconButton>
        )}
        <Stack sx={{ gridArea: "title", alignItems: "center" }}>
          <Typography variant="lightCaps" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          {(itemCount || itemCount === 0) && (
            <Typography variant="textSm" sx={{ color: "text.secondary" }}>
              {itemCount} {pluralize("Item", itemCount)}
            </Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}
