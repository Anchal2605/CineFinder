import Sidebar from "./sideBar";
import Navbar from "./Navbar";
import HeroSection from "./heroSection";
import MovieSection from "./movieSection";


import { newMovies, continueWatching } from "./Data/movie";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#17171b] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-[230px]">

        <Navbar />

        <div className="pb-10">

          <HeroSection />

          <MovieSection
            title="New Movies"
            movies={newMovies}
          />

          <MovieSection
            title="Continue Watching"
            movies={continueWatching}
            continueWatching
          />

        </div>

     
      </main>

    </div>
  );
}