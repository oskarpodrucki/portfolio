import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import MeBox from "@/components/MeBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { AnimatedGroup } from "@/components/ui/animated-group";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "oskarpodrucki",
	description: "portfolio website created by oskarpodrucki",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<AnimatedGroup
						className='flex flex-col justify-center items-center h-screen gap-2'
						variants={{
							container: {
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.05,
									},
								},
							},
							item: {
								hidden: { opacity: 0, y: 40, filter: "blur(2px)" },
								visible: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)",
									transition: {
										duration: 2,
										type: "spring",
										bounce: 0.3,
									},
								},
							},
						}}>
						<MeBox />
						<Navbar />
						{children}
						<Footer />
					</AnimatedGroup>
				</ThemeProvider>
			</body>
		</html>
	);
}
