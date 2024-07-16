import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/componants/shared/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/componants/shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "A car repearing shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
