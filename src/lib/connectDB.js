import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
  try {
    if (db) return db;
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("Car-Doctor");
    return db;
  } catch (error) {
    console.log(error);
  }
};
