import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions = "";
const handler = NextAuth({
  // secret: process.env.NEXTAUTH_SECRET,
  secret: process.env.NEXTAUTH_URL,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const userCollection = db.collection("users");
        const currentUser = await userCollection.findOne({ email });

        if (!currentUser) return null;
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!passwordMatched) return null;
        return currentUser;
      },
    }),
  ],
  callbacks: [],
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
