import React from 'react'

    const GenreCard = ({genre}) => {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-red-500/40 hover:bg-red-500/[0.06]">

        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-xl transition group-hover:bg-red-500/20">
          {genre.icon}
        </div>

        <h3 className="font-semibold text-white">
          {genre.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {genre.count} Movies
        </p>

      </div>
    </div>
  );
};

export default GenreCard
