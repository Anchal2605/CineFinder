import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

      <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/70 via-[#170707] to-black px-7 py-16 text-center sm:px-12">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />

        {/* Content */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            <Sparkles size={15} />
            Start discovering
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
            Find Your Next
            <span className="text-[#e50914]"> Favorite Movie.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Explore amazing movies, discover new genres and find stories
            that are worth watching.
          </p>

          {/* Button */}
          <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#e50914] px-7 py-3.5 font-semibold text-white transition hover:bg-red-700 hover:shadow-[0_0_30px_rgba(229,9,20,0.3)]">

            Explore Movies

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>
      </div>

    </section>
  );
};

export default CTASection;