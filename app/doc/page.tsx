import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import Menu from "@/components/doc/Menu";

export default function Home() {
  return (
    <>
      <main className="flex  min-h-screen flex-col items-center justify-between max-w-full">
        <Navbar></Navbar>
        <Menu />
        <Footer></Footer>
      </main>
    </>
  );
}
