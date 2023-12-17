"use client";
import { PieChart } from "react-minimal-pie-chart";
import Link from "next/link";

const score = Math.floor(Math.random() * 100);

function ProfileLink() {
	const unused = 100 - score;
	const graphData = [
		{ title: "Score", value: score, color: "#00ff00" },
		{ title: "Unused", value: unused, color: "#ff0000" },
	];
	return (
		<Link href="/profile" className="m-1 w-10">
			<PieChart data={graphData} startAngle={270} lengthAngle={-360} />
		</Link>
	);
}

export default ProfileLink;
