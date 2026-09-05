import { useState } from "react";
import Sidebar from "./sideBar";
import Navbar from "./Navbar";
import HeroSection from "./heroSection";
import MovieSection from "./movieSection";

export default function Dashboard() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Movies");
  const [watchHistory, setWatchHistory] = useState([]);


  return (
    <div className="min-h-screen bg-[#17171b] text-white">

      {/* Sidebar */}
      <Sidebar 
      onCategoryChange={setActiveCategory}
      activeCategory={activeCategory} 
      />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-[230px]">

        <Navbar
        onSearch={setSearchQuery}
        onMovieSelect={setSelectedMovie}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
             />

        <div className="pb-10">

          {/* Hero Section */}
          <HeroSection movie={selectedMovie} />

          {/* Movies */}
          <MovieSection
            onMovieSelect={setSelectedMovie}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            watchHistory={watchHistory}
            setWatchHistory={setWatchHistory}
          />

        </div>

      </main>

    </div>
  );
}