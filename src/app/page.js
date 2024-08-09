import Banner from "@/componants/Home/Banner/Banner";
import Services from "@/componants/Home/Services/Services";
import Footer from "@/componants/shared/Footer";
import Navbar from "@/componants/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Banner />
        <Services />
      </main>
      <Footer />
    </>
  );
}
