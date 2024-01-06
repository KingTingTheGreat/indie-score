import { Leaderboard } from "@/components/leaderboard";

const processUsers = (users: any) => {
	return users.map((user: any) => {
		return {
			username: user.username,
			score: Number(user.score),
		};
	});
};

export default async function Rankings() {
	try {
		const users = await fetch((process.env.ROOT as string) + "/api/users", {
			headers: { authorization: process.env.API_AUTH as string },
		})
			.then((response) => response.json())
			.then((data) => processUsers(data));

		return <Leaderboard users={users} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load rankings");
		return <div>Failed to load rankings</div>;
	}
}
