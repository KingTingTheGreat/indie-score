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
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
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
		async jwt({ token, account }) {
			if (account) {
				token.id = account.id;
				token.expires_at = account.expires_at;
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.user = token;
			return session;
		},
	},
	secret: process.env.NEXT_AUTH_SECRET ? process.env.NEXT_AUTH_SECRET : randomString(),
});

export { handler as GET, handler as POST };
