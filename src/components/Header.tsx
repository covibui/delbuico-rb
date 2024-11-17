import {Stack, useMediaQuery} from "@mui/material";
import Logo from "@assets/del-buico-logo.svg";

export default function Header() {
	const isSm = useMediaQuery((theme) => theme.breakpoints.between("sm", "lg"));
	const isLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	const logoSize = isLg ? 200 : isSm ? 110 : 65;

	return (
		<Stack
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
			<Logo width={logoSize} height={logoSize} />
		</Stack>
	);
}
