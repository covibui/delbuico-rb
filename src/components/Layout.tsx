import Head from "next/head";

type Props = {
	children: React.ReactNode;
};
export default function Layout({children}: Props) {
	return (
		<div className="root">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<meta name="theme-color" content="#fff" />
			</Head>
			<main>{children}</main>
		</div>
	);
}
