import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import ImmerMain from "./ImmerMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <ImmerMain />
        <Footer></Footer>
      </main>
    </>
  );
}
