//IMPORT MONGOOSE
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;

// connection function
export const usersDBConnect = async () => {
	const UsersSchema = new mongoose.Schema({});

	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// const db = conn.connection.db;

	// console.log("Database Name: ", DB_NAME);

	// const collection = db.collection(DB_COLLECTION as string);

	// console.log("Collection Name: ", collection.collectionName);

	const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema, DB_COLLECTION);
	// const Users = mongoose.model("Users", UsersSchema, DB_COLLECTION);

	// console.log("Users Model: ", Users);

	return { conn, Users };
};
