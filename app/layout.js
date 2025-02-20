import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio of Umar Farooq - Software Developer",
	description:
		"This is the portfolio of Umar Farooq. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others.",
	icons: {
		icon: [
			{
				url: "/og-image.png",
				sizes: "any",
			},
		],
	},
	manifest: "/site.webmanifest",
	openGraph: {
		title: "Portfolio of Umar Farooq - Software Developer",
		description:
			"Full Stack Developer specializing in web and mobile development",
		url: "https://farooqs-portfolio.vercel.app",
		siteName: "Umar Farooq Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Umar Farooq - Software Developer",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer />
				<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
					<Navbar />
					{children}
					<ScrollToTop />
				</main>
				<Footer />
			</body>
		</html>
	);
}
