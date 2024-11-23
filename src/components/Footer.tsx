import {Box, Typography} from "@mui/material";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				px: 2,
				py: {
					xs: 1.25,
					sm: 2,
				},
			}}
		>
			<Typography>&copy; Copyright {new Date().getFullYear()}</Typography>
		</Box>
	);
}
