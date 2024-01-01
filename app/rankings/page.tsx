import { Leaderboard } from "@/components/leaderboard";

// const axios = require("axios");

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
		const users = await fetch("https://indie-score.vercel.app/api/users")
			.then((response) => response.json())
			.then((data) => processUsers(data));

		return <Leaderboard users={users} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load rankings");
		return <div>Failed to load rankings</div>;
	}
}
