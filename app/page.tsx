import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import Card from "@/components/InitialCard";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between max-w-full	">
        <Navbar></Navbar>

        <Card></Card>
        <Footer></Footer>
      </main>
    </>
  );
}
