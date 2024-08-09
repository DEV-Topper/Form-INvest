/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "www.slashcreative.co",
				protocol: "https",
			},
		],
	},
	env: {
		GOOGLE_ID: process.env.GOOGLE_ID,
		GOOGLE_SECRET: process.env.GOOGLE_SECRET,
		GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
		GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL,
		ONLINE_DB: process.env.ONLINE_DB,
	},
	serverRuntimeConfig: {
		GOOGLE_ID: process.env.GOOGLE_ID,
		GOOGLE_SECRET: process.env.GOOGLE_SECRET,
		GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
		GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL,
		ONLINE_DB: process.env.ONLINE_DB,
	},
};

export default nextConfig;
