import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (request) => {
  const body = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exists = await userCollection.findOne({ email: body.email });
    if (exists) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hashSync(body.password, 14);
    const res = await userCollection.insertOne({
      ...body,
      password: hashedPassword,
    });

    return Response.json({ message: "User created succssfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Ooops!! There was an error", error });
  }
};
