import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import CreateMain from "./CreateMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <CreateMain />
        <Footer></Footer>
      </main>
    </>
  );
}
