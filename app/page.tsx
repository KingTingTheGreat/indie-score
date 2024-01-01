import { ScoreBar } from "@/components/score-bar";
import { LoginButton } from "@/components/login-button";

export default function Home() {
	const score = Math.floor(Math.random() * 100);
	// const loggedIn = Math.random() > 0.5;
	let loggedIn = false;
	return (
		<main className="w-full">
			<div className="flex flex-col w-full items-center justify-between">
				<h2 className="m-5 text-6xl text-center">Find your rank</h2>
				{!loggedIn ? <LoginButton /> : <ScoreBar score={score} />}
			</div>
		</main>
	);
}
