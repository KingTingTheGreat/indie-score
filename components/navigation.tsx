import Link from "next/link";

const NavLink = ({ name, path }: { name: string; path: string }) => {
	return (
		<Link href={path} className="m-1 p-2 rounded bg-[#333333]">
			{name}
		</Link>
	);
};

export const Navigation = () => {
	return (
		<nav className="flex justify-between items-center">
			<NavLink name="Rankings" path="/rankings" />
			<NavLink name="Distribution" path="/distribution" />
			<NavLink name="About" path="/about" />
		</nav>
	);
};
