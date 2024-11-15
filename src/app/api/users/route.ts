import { UserModel } from "@/lib/models";
import bcrypt from "bcrypt";

export const GET = async () => {
  try {
    const users = await UserModel.find();

    return Response.json({ users });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: Request) => {
  const { email, password, firstName, lastName } = await request.json();
  try {
    const userFound = await UserModel.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    return Response.json({ user: savedUser });
  } catch (e) {
    console.log(e);
    return Response.json({});
  }
};
