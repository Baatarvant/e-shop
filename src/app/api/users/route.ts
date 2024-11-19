import { UserModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const users = await UserModel.find();

    return Response.json({ users });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { firstName, lastName, email, password } = await request.json();

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return Response.json({ message: "success", user });
  } catch (error) {
    return Response.json({ message: error });
  }
};
