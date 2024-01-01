import { DefaultSession } from "next-auth";

export type User = {
	name?: string | null;
	email?: string | null;
	username?: string;
	token?: string;
	score?: number;
};

export interface ResponseFuncs {
	GET?: Function;
	POST?: Function;
	PUT?: Function;
	DELETE?: Function;
}

export type DataArray = [number, number, string];

export interface Session extends Omit<DefaultSession, "user"> {
	user?: User;
	expires: string;
}
