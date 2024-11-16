module.exports = {
	output: "export",
	distDir: "dist",
	pageExtensions: ["tsx"],
	async redirects() {
		return [
			{
				source: "/groups",
				destination: "/",
				permanent: true,
			},
			{
				source: "/groups/:slug/recipes",
				destination: "/groups/:slug",
				permanent: true,
			},
		];
	},
	webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
		config.module.rules.push(
			...[
				{
					test: /\.yml$/,
					type: "json",
					use: "yaml-loader",
				},
				{
					test: /\.svg$/,
					use: "@svgr/webpack",
				},
			]
		);
		return config;
	},
};
