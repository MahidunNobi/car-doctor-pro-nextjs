import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const bookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return Response.json(bookings);
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "There was an error", error },
      { status: 400 }
    );
  }
};
