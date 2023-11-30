import { LineGraph } from "@/components/line-graph";
import { Header } from "@/components/header";

export default function Distribution() {
	const score = Math.floor(Math.random() * 100);
	return (
		<>
			<Header />
			<main className="flex flex-row justify-start items center w-[40%] bg-[#555]">
				<div className="">
					<LineGraph score={score} />
					<p>Your Score: {score}</p>
				</div>
			</main>
		</>
	);
}
