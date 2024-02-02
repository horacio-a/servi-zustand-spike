import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import SubcribeMain from "./SubcribeMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <SubcribeMain />
        <Footer></Footer>
      </main>
    </>
  );
}
