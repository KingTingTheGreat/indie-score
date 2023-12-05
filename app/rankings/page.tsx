import { Header } from "@/components/header";
import Image from "next/image";
import { Leaderboard } from "@/components/leaderboard";

export default function Rankings() {
	return (
		<>
			<Header />
			<h1>rankings</h1>
			<Leaderboard />
		</>
	);
}
