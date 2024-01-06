import { type NextRequest } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";

export const dynamic = "force-dynamic"; // defaults to auto

const url = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

export async function GET(request: NextRequest) {
	try {
		const headersList = headers();
		if (
			crypto.timingSafeEqual(
				Buffer.from(headersList.get("authorization") as string),
				Buffer.from(process.env.API_AUTH as string)
			)
		) {
			const token = headersList.get("AccessToken");
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
		} else {
			throw new Error("Unauthorized");
		}
	} catch (error) {
		return new Response(JSON.stringify("Unauthorized"), {
			status: 401,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	}
}
