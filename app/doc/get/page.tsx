import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import GetMain from "./GetMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <GetMain />
        <Footer></Footer>
      </main>
    </>
  );
}
