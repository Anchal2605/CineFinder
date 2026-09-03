const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-6 text-center text-sm text-gray-500 sm:px-6 md:flex-row md:justify-between md:px-8 md:py-7 md:text-left">

        <p>
          © 2026{" "}
          <span className="font-semibold text-red-500">
            Cine Finder
          </span>
          . All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6">
          <span className="cursor-pointer transition hover:text-white">
            Terms & Conditions
          </span>

          <span className="cursor-pointer transition hover:text-white">
            Privacy Policy
          </span>

          <span className="cursor-pointer transition hover:text-white">
            Contact Us
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;