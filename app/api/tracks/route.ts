import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

const url = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

export async function GET(request: NextRequest) {
	const token = request.headers.get("AccessToken");

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "/",
			"Access-Control-Allow-Methods": "GET, POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
