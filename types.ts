export type User = {
	username: string;
	token?: string;
	score: number;
};

export interface ResponseFuncs {
	GET?: Function;
	POST?: Function;
	PUT?: Function;
	DELETE?: Function;
}

export type DataArray = [number, number, string];
