import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

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
					scope: "user-top-read",
					grant_type: "authorization_code",
					response_type: "code",
				},
			},
		}),
	],
	// A database is optional, but required to persist accounts in a database
	// database: process.env.DATABASE_URL,
	callbacks: {
		async jwt({ token, user, account, session, trigger }) {
			// console.log("jwt callback", { token, user, account, session });

			if (trigger === "update" && session!.user.score) {
				console.log("updating score");
				token.score = session!.user.score;
			}

			if (account) {
				token.id = account.id;
				token.expires_at = account.expires_at;
				token.accessToken = account.access_token;
			}
			// if (user) {
			// 	token.email = "user.email";
			// 	token.name = user.name;
			// }
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
