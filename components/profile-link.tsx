"use client";
import { PieChart } from "react-minimal-pie-chart";
import Link from "next/link";
import { useSession } from "next-auth/react";

function ProfileLink() {
	const { data: session } = useSession();
	// @ts-ignore
	const score = session?.user.score || 0;
	const unused = 100 - score;
	const graphData = [
		{ title: "Score", value: score, color: "#78cb5f" },
		{ title: "Unused", value: unused, color: "#333333" },
	];
	return (
		<Link href="/profile" className="m-1 w-10">
			<PieChart data={graphData} startAngle={270} lengthAngle={-360} />
		</Link>
	);
}

export default ProfileLink;
