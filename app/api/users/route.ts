import { type NextRequest } from "next/server";
import { usersDBConnect } from "@/utils/connection";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
	if (request.nextUrl.origin !== process.env.ALLOWED_ORIGIN) {
		return new Response("Unauthorized", {
			status: 401,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	}

	const db = await usersDBConnect();
	const users = await db.Users.find({});

	return new Response(JSON.stringify(users), {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
