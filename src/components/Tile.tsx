import {Box, Stack, Typography} from "@mui/material";
import palette from "@theme/palette";
import RouterLink from "next/link";

export default function Tile({
	name,
	href,
	children,
}: {
	name: string;
	href: string;
	children?: React.ReactNode;
}) {
	return (
		<Stack
			component={RouterLink}
			href={href}
			spacing={0.5}
			sx={{
				"&:nth-of-type(4n+1) .MuiBox-root": {
					background: palette.beige.B1,
				},
				"&:nth-of-type(4n+2) .MuiBox-root": {
					background: palette.beige.B2,
				},
				"&:nth-of-type(4n+3) .MuiBox-root": {
					background: palette.beige.B3,
				},
				"&:nth-of-type(4n+4) .MuiBox-root": {
					background: palette.beige.B4,
				},
				textDecoration: "none",
				color: "unset",
			}}
		>
			<Box
				sx={{
					width: 1,
					aspectRatio: 1,
					borderRadius: 1,
					boxShadow: "0px 2px 4px 0px rgba(117, 117, 117, 0.3)",
				}}
			></Box>
			<Typography sx={{fontSize: {xs: 11, sm: 14, lg: 18}}}>{name}</Typography>
			{children}
		</Stack>
	);
}
