import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const body = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const newbooking = await bookingsCollection.insertOne(body);

    return Response.json({ message: "Service booked successfully!" });
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "There was an error", error },
      { status: 400 }
    );
  }
};
