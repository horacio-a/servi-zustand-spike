import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import SetMain from "./SetMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <SetMain />
        <Footer></Footer>
      </main>
    </>
  );
}
