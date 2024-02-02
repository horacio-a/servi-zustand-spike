import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import DevtoolsMain from "./DevtoolsMain";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        <DevtoolsMain />
        <Footer></Footer>
      </main>
    </>
  );
}
