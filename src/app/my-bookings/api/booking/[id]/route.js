import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const { date, phone, address } = await request.json();
  console.log({ date, phone, address });
  try {
    const filter = { _id: new ObjectId(params.id) };
    const updateDoc = {
      $set: {
        date,
        phone,
        address,
      },
    };
    const booking = await bookingsCollection.updateOne(filter, updateDoc);
    return Response.json({ message: "Updated Successfully", ...booking });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "There was an error", error },
      { status: 400 }
    );
  }
};
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const booking = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ message: "Deleted Successfully", ...booking });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "There was an error", error },
      { status: 400 }
    );
  }
};
