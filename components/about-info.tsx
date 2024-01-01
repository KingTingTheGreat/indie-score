import Link from "next/link";

const Team = [
	{
		name: "Jeffrey Ting",
		picture: "/images/jeffrey.jpg",
		bio: "I am a student at Boston University majoring in Computer Science and Philosophy.",
	},
	{
		name: "Rida Naeem",
		picture: "/images/rida.jpg",
		bio: "I am a student at Boston University majoring in Neuroscience and minoring in Computer Science.",
	},
];

export const AboutInfo = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<h1 className="text-4xl p-2 m-1">Meet the team!</h1>
			<p className=" text-xl m-1 max-w-[70%] text-center">
				We are a team of undergraduate developers passionate about analyzing and learning about our music
				listening habits. We&#39;re excited to share our project with you!
			</p>
			<Link href="https://github.com/KingTingTheGreat/indie-score" target="_blank">
				<p className="hover:text-yellow m-1 p-1 rounded-lg text-lg text-[#999999] bg-[#573457]">
					Check us out on GitHub!
				</p>
			</Link>
			<div className="flex flex-row flex-wrap justify-center w-[80%]">
				{Team.map(function (member) {
					const { name, picture, bio } = member;
					return (
						<div key={name} className="flex flex-col items-center w-52 m-5 rounded-3xl p-5 bg-[#333333]">
							<h2 className="text-2xl m-0 p-2">{name}</h2>
							{/* <div className="w-85%">
								<Preview image={picture} />
							</div> */}
							<p className="m-0 pt-2 pb-0 text-center">{bio}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
