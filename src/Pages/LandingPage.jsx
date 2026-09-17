import Navbar from "../Landingpage/Navbar";
import LandingHero from "../Landingpage/landingHero";
import Footer from "../Landingpage/Footer";

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