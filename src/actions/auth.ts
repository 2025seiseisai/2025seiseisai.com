"use server";
import { signIn, signOut } from "@/auth";

export async function signInAction(username: string, password: string) {
    await signIn("credentials", { username: username, password: password });
}

export async function signOutAction() {
    await signOut();
}
