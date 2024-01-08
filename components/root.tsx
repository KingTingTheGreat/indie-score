"use client";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const Root = ({ children }: { children: React.ReactNode }) => {
	return (
		// <SessionProvider session={pageProps.session}>
		// 	<Header />
		// 	{children}
		// </SessionProvider>
		<SessionProvider>
			<html lang="en">
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</html>
		</SessionProvider>
	);
};
