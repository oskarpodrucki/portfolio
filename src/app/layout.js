import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import MeBox from "@/components/MeBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "oskarpodrucki",
	description: "portfolio website created by oskarpodrucki",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.className} flex flex-col justify-center items-center h-screen gap-2`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<MeBox />
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
