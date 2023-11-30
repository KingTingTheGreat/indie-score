import { Header } from "@/components/header";
import { ScoreBar } from "@/components/score-bar";

export default function Home() {
	const score = Math.floor(Math.random() * 100);
	const loggedIn = Math.random() > 0.5;
	return (
		<>
			<Header />
			<main className="w-full bg-[#00FF00]">
				<div className="flex flex-col w-full align-center justify-between bg-[#FFFFFF]">
					<div className="mx-10 text-center absolute left-20 top-32 w-20%">
						<p className="my-10 text-5xl">Find your rank</p>
						{loggedIn ? (
							<button className="m-10 px-5 py-2 text-4xl rounded-2xl bg-[#78CB5F] text-white shadow-xl">
								Login with Spotify
							</button>
						) : (
							<ScoreBar score={score} />
						)}
					</div>
				</div>
			</main>
		</>
	);
}
