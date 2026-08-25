const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">

        <div className="flex flex-col items-center justify-between gap-5 text-sm sm:flex-row">

          {/* Copyright */}
          <p className="text-gray-500">
            © 2026{" "}
            <span className="font-semibold text-[#e50914]">
              Cine Finder
            </span>
            . All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500">

            <a
              href="#"
              className="transition hover:text-[#e50914]"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="transition hover:text-[#e50914]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#e50914]"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="transition hover:text-[#e50914]"
            >
              About Us
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;