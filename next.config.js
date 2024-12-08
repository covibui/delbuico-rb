module.exports = {
	output: "export",
	distDir: "dist",
	pageExtensions: ["tsx"],
	images: {
		unoptimized: true
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
