import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const service = await servicesCollection.findOne({
      _id: params.id,
    });
    // console.log(service);
    return Response.json({ data: service });
  } catch (error) {
    console.log(error);
  }
};
