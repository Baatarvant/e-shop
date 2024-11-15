"use client";
import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <button onClick={() => signIn("google", { redirectTo: "/" })}>
      Sign In
    </button>
  );
}

export default SignIn;
