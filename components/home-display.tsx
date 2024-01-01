"use client";
import { useState, useEffect } from "react";
import { LoginButton } from "@/components/login-button";
import { Session } from "@/types";
import { getSession } from "next-auth/react";
import { ScoreBar } from "./score-bar";

const isAuthenticated = async (session: Session | null) => {
	if (!session || Math.floor(Date.now()) >= (session.user as any).expires_at * 1000) {
		console.log("not authenticated");
		return false;
	}
	console.log("authenticated");
	return true;
};

export const HomeDisplay = () => {
	const score = Math.floor(Math.random() * 100);

	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		getSession().then((session) => {
			isAuthenticated(session).then((res) => setLoggedIn(res));
		});
	}, []);

	return loggedIn ? <ScoreBar score={score} /> : <LoginButton />;
};
