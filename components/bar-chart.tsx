"use client";
import { Chart } from "react-google-charts";

const maxScore = 100;
const title = ["Score", "Number of Users", { role: "style" }];
let data: (number | string)[][] = [];
for (let i = 0; i <= maxScore; i++) {
	const num = Math.floor(Math.random() * 100) + 1;
	data.push([i, num, "#78CB5F"]);
}

export const BarChart = ({ score }: { score: number }) => {
	data[score][2] = "#FF0000";

	console.log("bar chart");
	return (
		<Chart
			chartType="ColumnChart"
			data={[title, ...data]}
			width="100%"
			height="400px"
			options={{
				// title: "Distribution of User Scores",
				bar: { groupWidth: "100%" },
				legend: { position: "none" },
				colors: ["#FF0000", "#78CB5F"],
				backgroundColor: "#444",
				vAxis: {
					title: "Number of Users",
					gridlines: {
						count: 0, // hide vertical grid lines
						color: "transparent", // hide vertical grid lines
					},
				},
				hAxis: {
					title: "Score",
					gridlines: {
						count: 0, // hide vertical grid lines
						color: "transparent", // hide horizontal grid lines
					},
				},
			}}
			// legendToggle
		/>
	);
};
