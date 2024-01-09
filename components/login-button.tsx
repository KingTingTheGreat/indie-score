"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
	const handleLogin = () => {
		console.log("login button clicked");
		signIn("spotify", { callbackUrl: "https://indie-score.vercel.app" });
	};

	return (
		<button className="m-5 px-5 py-2 w-fit text-2xl rounded-2xl bg-customGreen" onClick={handleLogin}>
			Login with Spotify
		</button>
	);
};
