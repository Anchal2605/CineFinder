import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MovieSection from "../components/MovieSection";
import CTASection from "../Components/CTASection";
import Footer from "../Components/footer";



const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection />
      <MovieSection />
      <CTASection />
      <Footer />
      
    </div>
  );
};

export default Home;