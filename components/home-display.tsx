"use client";
import { useEffect, useReducer, useState } from "react";
import { SongIcon } from "./song-icon";
import { LoginButton } from "./login-button";
import { useSession } from "next-auth/react";
import { Song, Artist, Album } from "@/types";
import { calculateScore } from "@/utils/calculate-score";

export const HomeDisplay = () => {
	const [songs, setSongs] = useState<Song[]>([]);
	const { data: session, update } = useSession();
	// @ts-ignore
	const [userScore, setUserScore] = useState<number>(session?.user.score ?? 100);

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
					.then((resData) => setSongs(resData.items));
			}
		};
		fetchSongs();
		if (songs) {
			setUserScore(calculateScore(songs));
			// @ts-ignore
			if (userScore !== (session?.user.score ?? 100)) {
				update({ user: { score: userScore } });
			}
		}
	}, [session]);

	return (
		<main className="flex flex-col min-h-screen w-[80%] flex-wrap items-center justify-between p-24">
			<LoginButton />
			{songs ? (
				songs.map((song) => <SongIcon key={song.id} song={song} />)
			) : (
				<p>no data to display. please sign in</p>
			)}
		</main>
	);
};
