import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "google") {
          const { name, email, image } = user;
          const db = await connectDB();
          const userCollection = db.collection("users");
          const exists = await userCollection.findOne({ email });
          if (!exists) {
            const res = await userCollection.insertOne(user);
            return res;
          } else {
            return res;
          }
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
