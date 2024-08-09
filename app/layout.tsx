import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dbConfig } from "../public/utils/dbConfig";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Topkem - Your Number One Cleaning Service",
	description:
		"Topkem offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
	keywords:
		"Topkem, cleaning services, home cleaning, business cleaning, premium cleaning",
	authors: [{ name: "Topkem Team", url: "www.topkem.org" }],
	openGraph: {
		type: "website",
		url: "https://topkem.org",
		title: "Topkem - Your Number One Cleaning Service",
		description:
			"Topkem offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
		images: [
			{
				url: "/topkemLogo.png",
				width: 800,
				height: 600,
				alt: "Topkem Cleaning Service",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@topkem",
		title: "Topkem - Your Number One Cleaning Service",
		description:
			"Topkem offers premium cleaning services for homes and businesses. Trust us for all your cleaning needs.",
		images: "/topkemLogo.png",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	await dbConfig();
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="canonical"
					href=""
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</head>
			<body className={`${inter.className} w-full overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}
