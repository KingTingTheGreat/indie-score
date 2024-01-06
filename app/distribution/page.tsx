import { BarChart } from "@/components/bar-chart";

const root = process.env.ROOT ? process.env.ROOT : "https://indie-score.vercel.app";

const processUsers = (users: any) => {
	return users.map((user: any) => {
		return {
			username: user.username,
			score: Number(user.score),
		};
	});
};

export default async function Distribution() {
	try {
		const score = Math.floor(Math.random() * 100);
		const users = await fetch(root + "/api/users", {
			headers: { authorization: process.env.API_AUTH as string },
		})
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
	} catch (error) {
		console.error(error);
		console.log("Failed to load user data");
		return <div>Failed to load user data</div>;
	}
}
