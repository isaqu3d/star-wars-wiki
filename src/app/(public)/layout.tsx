import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "../globals.css";

export default function Layout() {
  return (
    <div className="font-sans flex flex-col mx-8">
      <Header />

      <Footer />
    </div>
  );
}
