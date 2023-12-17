import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
	return (
		<header className="flex flex-row max-sm:flex-col justify-between items-center w-full bg-[#222222] ">
			<Logo />
			<Navigation />
		</header>
	);
};
