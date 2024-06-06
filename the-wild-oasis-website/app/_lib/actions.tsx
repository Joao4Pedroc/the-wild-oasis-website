"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  console.log("signin");
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
