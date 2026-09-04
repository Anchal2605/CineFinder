import { useState } from "react";

import Sidebar from "./sideBar";
import Navbar from "./Navbar";
import HeroSection from "./heroSection";
import MovieSection from "./movieSection";

export default function Dashboard() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="min-h-screen bg-[#17171b] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-[230px]">

        <Navbar
        onSearch={setSearchQuery}
        onMovieSelect={setSelectedMovie}
             />

        <div className="pb-10">

          {/* Hero Section */}
          <HeroSection movie={selectedMovie} />

          {/* Movies */}
          <MovieSection
            onMovieSelect={setSelectedMovie}
             searchQuery={searchQuery}
          />

        </div>

      </main>

    </div>
  );
}