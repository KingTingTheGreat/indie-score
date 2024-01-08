import { type NextRequest } from "next/server";
import { usersDBConnect } from "@/utils/connection";
import { headers } from "next/headers";
import crypto from "crypto";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
	try {
		// if (
		// 	crypto.timingSafeEqual(
		// 		Buffer.from(headers().get("authorization") as string),
		// 		Buffer.from(process.env.API_AUTH as string)
		// 	)
		// ) {
		const headersList = headers();
		// iterate and log all headers
		console.log("Headers:");
		headersList.forEach((value, key) => {
			console.log(`${key}: ${value}`);
		});

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
		// } else {
		// 	throw new Error("Unauthorized");
		// }
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
