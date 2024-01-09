import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { usersDBConnect } from "@/utils/connection";

const randomString = () => {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = "";
	for (let i = 0; i < 32; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};

const handler = NextAuth({
	// Configure one or more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
			authorization: {
				params: {
					scope: "user-top-read user-read-email",
					grant_type: "authorization_code",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, session, trigger }) {
			// console.log("jwt callback", { token, user, account, session });

			if (trigger === "update" && session!.user.score) {
				console.log("updating score");
				token.score = session!.user.score;
				// const db = await usersDBConnect();
				// const user = await db.Users.findOne({ id: session!.user.email });
				// if (user) {
				// 	user.score = session!.user.score;
				// 	await user.save();
				// }
			}

			if (account) {
				token.id = account.id;
				token.expires_at = account.expires_at;
				token.accessToken = account.access_token;
			}
			if (user) {
				token.email = user.email;
				token.name = user.name;
			}

			return token;
		},
		async session({ session, token }) {
			// console.log("session callback", { session, user, token });
			// session.user = token;
			// return session;
			return { ...session, user: token };
		},
	},
	secret: process.env.NEXTAUTH_SECRET!,
});

export { handler as GET, handler as POST };
