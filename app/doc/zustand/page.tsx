import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import ZustandMain from "./ZustandMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <ZustandMain />
        <Footer></Footer>
      </main>
    </>
  );
}
