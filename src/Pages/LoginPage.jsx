import { useState } from "react";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // Password show/hide
  const [showPassword, setShowPassword] = useState(false);

  // Form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ================= FORM SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: "",
      password: "",
    };

    // ================= EMAIL VALIDATION =================

    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // ================= PASSWORD VALIDATION =================

    if (password.trim() === "") {
      newErrors.password = "Please enter your password";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    // Validation errors screen par show karo
    setErrors(newErrors);

    // Agar validation error hai to login check mat karo
    if (newErrors.email || newErrors.password) {
      return;
    }

    // ================= GET SAVED USER =================

    const users = JSON.parse(localStorage.getItem("users")) || [];

const savedUser = users.find(
  (user) => user.email === email.trim()
);

    // ================= ACCOUNT NOT FOUND =================

    if (!savedUser) {
      setErrors({
        email: "Account not found. Please sign up first.",
        password: "",
      });

      return;
    }

    // ================= EMAIL CHECK =================

    if (email.trim() !== savedUser.email) {
      setErrors({
        email: "Account not found. Please sign up first.",
        password: "",
      });

      return;
    }

    // ================= PASSWORD CHECK =================

    if (password !== savedUser.password) {
      setErrors({
        email: "",
        password: "Incorrect password",
      });

      return;
    }

    // ================= LOGIN SUCCESS =================

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard" , {replace : true});
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* ================= RED GLOW ================= */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full" />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-10">

        <div className="w-full max-w-[1050px] grid md:grid-cols-2 border border-white/10 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm">

          {/* ================= LEFT SIDE ================= */}

          <div className="hidden md:flex relative flex-col justify-center px-12 lg:px-16 py-16 border-r border-white/10">

            <div className="w-12 h-[2px] bg-[#F20A16] mb-7" />

            <p className="text-[#F20A16] text-sm font-medium tracking-wide mb-4">
              WELCOME BACK
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Find Your
              <br />

              <span className="text-[#F20A16]">
                Next Movie.
              </span>
            </h1>

            <p className="text-gray-400 leading-7 max-w-md">
              Login to CineFinder and continue discovering
              movies, new stories and something perfect
              to watch tonight.
            </p>

            {/* Stats */}

            <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">

              <div>
                <p className="text-2xl font-bold text-white">
                  10K+
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Movies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  50+
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Genres
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  4.8
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Rating
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center justify-center px-6 sm:px-10 lg:px-14 py-12">

            <div className="w-full max-w-md">

              {/* ================= LOGO ================= */}

              <div className="mb-10">

                <h2 className="text-2xl font-bold tracking-wide">

                  <span className="text-[#F20A16]">
                    CINE
                  </span>

                  <span className="text-white">
                    FINDER
                  </span>

                </h2>

              </div>

              {/* ================= HEADING ================= */}

              <div className="mb-8">

                <h3 className="text-3xl font-semibold text-white">
                  Login
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Welcome back. Let's find something great.
                </p>

              </div>

              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit}>

                {/* ================= EMAIL ================= */}

                <div className="mb-5">

                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="text"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        setErrors({
                          ...errors,
                          email: "",
                        });
                      }}
                      className={`
                        w-full
                        h-12
                        bg-[#080808]
                        border
                        rounded-lg
                        pl-11
                        pr-4
                        text-white
                        placeholder:text-gray-600
                        outline-none
                        transition
                        ${
                          errors.email
                            ? "border-red-600"
                            : "border-white/10 focus:border-[#F20A16]"
                        }
                      `}
                    />

                  </div>

                  {/* EMAIL ERROR */}

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* ================= PASSWORD ================= */}

                <div className="mb-4">

                  <label className="block text-sm text-gray-300 mb-2">
                    Password
                  </label>

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);

                        setErrors({
                          ...errors,
                          password: "",
                        });
                      }}
                      className={`
                        w-full
                        h-12
                        bg-[#080808]
                        border
                        rounded-lg
                        pl-11
                        pr-12
                        text-white
                        placeholder:text-gray-600
                        outline-none
                        transition
                        ${
                          errors.password
                            ? "border-red-600"
                            : "border-white/10 focus:border-[#F20A16]"
                        }
                      `}
                    />

                    {/* SHOW PASSWORD */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                        hover:text-white
                        transition
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                  {/* PASSWORD ERROR */}

                  {errors.password && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.password}
                    </p>
                  )}

                </div>

                {/* ================= FORGOT PASSWORD ================= */}

                <div className="flex justify-end mb-7">

                  <button
                    type="button"
                    className="
                      text-sm
                      text-gray-500
                      hover:text-[#F20A16]
                      transition
                    "
                  >
                    Forgot password?
                  </button>

                </div>

                {/* ================= LOGIN BUTTON ================= */}

                <button
                  type="submit"
                  className="
                    w-full
                    h-12
                    bg-[#F20A16]
                    hover:bg-[#D90813]
                    text-white
                    font-semibold
                    rounded-lg
                    transition
                    shadow-lg
                    shadow-red-950/30
                  "
                >
                  Login
                </button>

              </form>

              {/* ================= DIVIDER ================= */}

              <div className="flex items-center gap-4 my-7">

                <div className="flex-1 h-px bg-white/10" />

                <span className="text-xs text-gray-600">
                  OR
                </span>

                <div className="flex-1 h-px bg-white/10" />

              </div>

              {/* ================= GOOGLE ================= */}

              <button
                type="button"
                className="
                  w-full
                  h-12
                  border
                  border-white/10
                  bg-white/[0.02]
                  rounded-lg
                  text-gray-300
                  hover:border-white/20
                  hover:text-white
                  transition
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span className="font-bold text-white">
                  G
                </span>

                Continue with Google
              </button>

              {/* ================= SIGN UP ================= */}

              <p className="text-center text-sm text-gray-500 mt-7">

                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="
                    text-white
                    hover:text-[#F20A16]
                    font-medium
                    transition
                  "
                >
                  Sign Up
                </Link>

              </p>

              {/* ================= BACK HOME ================= */}

              <Link
                to="/"
                className="
                  flex
                  items-center
                  gap-2
                  mx-auto
                  mt-6
                  text-sm
                  text-gray-600
                  hover:text-[#F20A16]
                  transition
                  w-fit
                "
              >
                <ArrowLeft size={15} />
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;

