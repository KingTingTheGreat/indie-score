import { Song } from "@/types";

export const calculateScore = (songs: Song[]) => {
	const score = songs.reduce((acc, song) => {
		return acc + song.popularity;
	}, 0);

	return Math.floor(score / songs.length);
};
