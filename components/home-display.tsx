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
				fetch("/api/tracks", {
					headers: {
						AccessToken: token,
					},
				})
					.then((res) => res.json())
					.then((resData) => setData(resData.items));
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
