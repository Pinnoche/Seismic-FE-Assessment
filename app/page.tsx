import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Faq from "./components/Sections/Faq";
import FinalSection from "./components/Sections/FinalSection";
import Hero from "./components/Sections/Hero";
import HowItWorks from "./components/Sections/HowItWorks";
import Stores from "./components/Sections/Stores";
import Highlights from "./components/Sections/Highlights";
import WhoIsThisFor from "./components/Sections/WhoIsThisFor";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full space-y-8">
        <Hero />
        <Stores />
        <HowItWorks />
        <Highlights />
        <WhoIsThisFor />
        <Faq />
        <FinalSection />
      </main>
      <Footer />
    </div>
  );
}
