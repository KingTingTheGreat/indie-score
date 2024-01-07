import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
	try {
		const headersList = headers();
		const token = headersList.get("authorization");
		return new Response(JSON.stringify({ "your token": token }), {
			status: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify("Something Went Wrong"), {
			status: 500,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type, Authorization",
			},
		});
	}
}
