import credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { UserModel } from "../models";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClient from "../db/db-client";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await UserModel.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");

        return user;
      },
    }),
  ],
  adapter: MongoDBAdapter(mongoClient),
  session: {
    strategy: "jwt",
  },
});
