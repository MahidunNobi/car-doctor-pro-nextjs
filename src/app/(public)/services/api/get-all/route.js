import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const res = await servicesCollection.find().toArray();
    return Response.json({ data: res });
  } catch (error) {
    console.log(error);
  }
};
