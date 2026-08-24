import { ChevronRight } from "lucide-react";
import GenreCard from "./GenreCard";

const GenreSection = () => {

  const genres = [
    {
      name: "Action",
      count: "1200+",
      icon: "💥",
    },
    {
      name: "Comedy",
      count: "850+",
      icon: "😂",
    },
    {
      name: "Drama",
      count: "1500+",
      icon: "🎭",
    },
    {
      name: "Horror",
      count: "650+",
      icon: "👻",
    },
    {
      name: "Sci-Fi",
      count: "700+",
      icon: "🚀",
    },
    {
      name: "Thriller",
      count: "900+",
      icon: "🔪",
    },
  ];

  return (
    <section
      id="genres"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
    >

      {/* Header */}
      <div className="mb-8 flex items-end justify-between">

        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#e50914]">
            Browse
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Popular Genres
          </h2>
        </div>

        <button className="hidden items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-400 sm:flex">
          View All
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Genre Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

        {genres.map((genre) => (
          <GenreCard
            key={genre.name}
            genre={genre}
          />
        ))}

      </div>

    </section>
  );
};

export default GenreSection;