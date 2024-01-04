"use client";
import { useEffect, useState } from "react";
import { SongIcon } from "./song-icon";
import { LoginButton } from "./login-button";
import { useSession } from "next-auth/react";

export const HomeDisplay = () => {
	const [data, setData] = useState(undefined);
	const { data: session } = useSession();

	useEffect(() => {
		const fetchSongs = async () => {
			if (session?.user?.accessToken) {
				const response = await fetch("/api/tracks", {
					headers: {
						AccessToken: session.user.accessToken,
					},
				});
				const resData = await response.json();
				setData(resData);
			} else {
				console.log("no session or user or accessToken");
				console.log(session);
			}
		};
		fetchSongs();
	}, [session]);

	return (
		<main className="flex min-h-screen w-[80%] bg-[#987500] flex-wrap items-center justify-between p-24">
			<LoginButton />
			{data && data.items
				? data.items.map((song) => <SongIcon key={song.id} song={song} />)
				: console.log(`no items to map ${data}`)}
		</main>
	);
};
