import { BarChart } from "@/components/bar-chart";

const processUsers = (users: any) => {
	return users.map((user: any) => {
		return {
			username: user.username,
			score: Number(user.score),
		};
	});
};

export default async function Distribution() {
	const score = Math.floor(Math.random() * 100);
	const users = await fetch("https://indie-score.vercel.app/api/users")
		.then((response) => response.json())
		.then((data) => processUsers(data));
	return (
		<main>
			<div className="w-full flex justify-center">
				<div className="flex flex-col justify-center items-center min-w-[90%] min-h-[60%] bg-[#555] m-4 ">
					<p className="text-xl">Your Score: {score}</p>
					<BarChart score={score} users={users} />
				</div>
			</div>
		</main>
	);
}
