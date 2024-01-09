import { DistributionWrapper } from "@/components/distribution-wrapper";

const root = process.env.ROOT!;

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
		const users = await fetch(root + "/api/users", {
			headers: { authorization: process.env.API_AUTH! },
		})
			.then((response) => response.json())
			.then((data) => processUsers(data));
		return <DistributionWrapper users={users} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load user data");
		return <div>Failed to load user data</div>;
	}
}
