import type { Metadata } from "next";
import "./globals.css";
import { Root } from "@/components/root";

export const metadata: Metadata = {
	title: "Indie Ranker",
	description: "How niche is your music taste?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <Root children={children} />;
}
