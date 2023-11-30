import { LineGraph } from "@/components/line-graph";
import { Header } from "@/components/header";

export default function Distribution() {
	const score = Math.floor(Math.random() * 100);
	return (
		<>
			<Header />
			<main>
				<div className="w-full flex justify-center">
					<div className="flex flex-col justify-center items-center w-[40%] bg-[#555] m-4 ">
						<p className="text-xl">Your Score: {score}</p>
						<LineGraph score={score} />
					</div>
				</div>
			</main>
		</>
	);
}
