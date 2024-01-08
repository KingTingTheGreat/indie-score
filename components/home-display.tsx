"use client";
import { useEffect, useState } from "react";
import { SongIcon } from "./song-icon";
import { LoginButton } from "./login-button";
import { useSession } from "next-auth/react";
import { Song } from "@/types";

export const HomeDisplay = () => {
	const [data, setData] = useState<Song[]>([]);
	const { data: session } = useSession();

	useEffect(() => {
		const fetchSongs = async () => {
			// @ts-ignore
			const token = await session?.user.accessToken;
			if (token) {
				const response = await fetch("https://indie-score.vercel.app/api/tracks", {
					// const response = await fetch("http://localhost:3000/api/tracks", {
					headers: {
						AccessToken: token,
					},
				});
				const resData = await response.json();
				setData(resData.items);
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
			{data ? (
				data.map((song) => <SongIcon key={song.id} song={song} />)
			) : (
				<p>no data to display. please sign in</p>
			)}
		</main>
	);
};
