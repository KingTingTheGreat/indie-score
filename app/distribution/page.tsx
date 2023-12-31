// import { LineGraph } from "@/components/line-graph";
import { BarChart } from "@/components/bar-chart";

export default function Distribution() {
	const score = Math.floor(Math.random() * 100);
	return (
		<main>
			<div className="w-full flex justify-center">
				<div className="flex flex-col justify-center items-center min-w-[90%] min-h-[60%] bg-[#555] m-4 ">
					<p className="text-xl">Your Score: {score}</p>
					{/* <LineGraph score={score} /> */}
					<BarChart score={score} />
				</div>
			</div>
		</main>
	);
}
