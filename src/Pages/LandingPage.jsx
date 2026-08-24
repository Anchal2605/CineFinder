import Navbar from "../components/Navbar";
import LandingHero from "../components/LandingHero";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <LandingHero />
      <Footer />
    </div>
  );
};

export default LandingPage;