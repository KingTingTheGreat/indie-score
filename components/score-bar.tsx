export const ScoreBar = ({ score }: { score: number }) => {
	return (
		<div className="flex flex-row justify-start items center w-[70%] bg-[#00FF00]">
			<div className="bg-[#FF0000] h-[90%" style={{ width: `${score}%` }}>
				<p>{score}%</p>
			</div>
		</div>
	);
};
