import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="font-sans flex flex-col h-screen mx-8">
      <Header />

      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold mt-8 text-[#FFE81F]">
          Welcome to the Star Wars Wiki
        </h1>

        <p className="text-sm text-gray-500">
          This is a wiki about all things Star Wars.
        </p>
      </div>

      <Footer />
    </div>
  );
}
