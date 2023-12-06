import { User } from "@/types";

const users: User[] = [
	{
		username: "KingTing",
		score: 96,
	},
	{
		username: "Ridan",
		score: 80,
	},
	{
		username: "PuppyLover",
		score: 32,
	},
	{
		username: "MusicLover",
		score: 82,
	},
	{
		username: "Gamer",
		score: 72,
	},
	{
		username: "CrazyCatLady",
		score: 42,
	},
	{
		username: "PandaLover",
		score: 52,
	},
	{
		username: "CrazyDogLady",
		score: 62,
	},
	{
		username: "ProudAmerican",
		score: 23,
	},
	{
		username: "ProgrammingIsFun",
		score: 83,
	},
	{
		username: "AnimeBoy",
		score: 53,
	},
	{
		username: "IndieListener",
		score: 67,
	},
];

const TableHeader = ({ text }: { text: any }) => (
	<th className="p-2 m-1 text-lg text-[#78CB5F] border-solid border-2 border-[#999999]">{text}</th>
);

const TableContent = ({ text, color }: { text: any; color: string }) => (
	<td style={{ color }} className="p-1 text-lg text-center">
		{text}
	</td>
);

const LeaderboardRow = ({ rank, username, score }: { rank: number; username: string; score: number }) => {
	const color = rank === 1 ? "#d4af37" : rank === 2 ? "#c0c0c0" : rank === 3 ? "#cd7f32" : "";

	return (
		<tr>
			<TableContent text={rank} color={color} />
			<TableContent text={username} color={""} />
			<TableContent text={score} color={""} />
		</tr>
	);
};

// display the top 10 users with the most points and their scores
export const Leaderboard = () => {
	// const [users, setUsers] = useState([]);
	// useEffect(() => {
	// 	fetch("/api/leaderboard")
	// 		.then((res) => res.json())
	// 		.then((data) => setUsers(data));
	// }, []);

	const top = users
		.filter((a) => a.score !== undefined)
		.sort((a, b) => (a.score !== undefined && b.score !== undefined ? b.score - a.score : 0)) // score should always be valid because of filter but i was getting annotation errors
		.slice(0, 10);

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-4xl p-2 m-1">Leaderboard</h2>
			<table className="table-auto">
				<thead>
					<tr>
						<TableHeader text="Rank" />
						<TableHeader text="Username" />
						<TableHeader text="Score" />
					</tr>
				</thead>
				<tbody>
					{top.map((user, i) => (
						<LeaderboardRow
							key={i}
							rank={i + 1}
							username={user.username}
							score={user.score !== undefined ? user.score : 50}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
