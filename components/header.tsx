import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
	return (
		<header className="flex justify-between w-full bg-[#222222]">
			<Logo />
			<Navigation />
		</header>
	);
};
