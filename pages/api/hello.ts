export default async function handler(req: any, res: any) {
	// Check if the request has the Origin header
	const origin = req.headers.origin;

	// You may have a list of allowed origins
	const allowedOrigins = ["https://indie-score.vercel.app", "http://localhost:3000"];

	if (allowedOrigins.includes(origin)) {
		// Request is from an allowed origin, proceed with processing the request
		// Your API logic here

		res.status(200).json({ message: "Request processed successfully" });
	} else {
		// Request is from an unauthorized origin
		res.status(403).json({ message: "Unauthorized request" });
	}
}
