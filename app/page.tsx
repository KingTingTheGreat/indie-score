import { ScoreBar } from "@/components/score-bar";

export default function Home() {
	const score = Math.floor(Math.random() * 100);
	const loggedIn = Math.random() > 0.5;
	return (
		<main className="w-full">
			<div className="flex flex-col w-full items-center justify-between">
				<h2 className="m-5 text-6xl text-center">Find your rank</h2>
				{loggedIn ? (
					<button className="m-5 px-5 py-2 w-fit text-2xl rounded-2xl bg-[#78CB5F]">
						Login with Spotify
					</button>
				) : (
					<ScoreBar score={score} />
				)}
			</div>
		</main>
	);
}
