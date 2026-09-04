import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Errors
  const [errors, setErrors] = useState({});

  // Input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms validation
    if (!formData.terms) {
      newErrors.terms = "You must accept Terms & Conditions";
    }

    // Show errors
    setErrors(newErrors);

    // If no errors → Dashboard
    if (Object.keys(newErrors).length === 0) {
      const userData = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };
    
  const users = JSON.parse(localStorage.getItem("users")) || [];

const emailExists = users.some(
  (users) => users.email === formData.email.trim()
);

if (emailExists) {
  setErrors({
    email: "An account with this email already exists.",
  });
  return;
}

users.push(userData);

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("isLoggedIn", "true");

navigate("/dashboard", { replace: true });
  
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] px-4 py-8 text-white sm:px-8">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#050505]">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden w-1/2 flex-col justify-center border-r border-white/10 px-12 lg:flex xl:px-20">

          <div className="mb-10 h-[3px] w-16 bg-[#e50914]" />

          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-[#e50914]">
            Join Cine Finder
          </p>

          <h1 className="max-w-lg text-5xl font-bold leading-[1.1] xl:text-6xl">
            Start Your
            <br />
            <span className="text-[#e50914]">
              Movie Journey.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Create your CineFinder account and start discovering
            movies, new stories and something perfect to watch tonight.
          </p>

          <div className="mt-14 flex gap-12 border-t border-white/10 pt-10">

            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="mt-1 text-sm text-gray-500">Movies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="mt-1 text-sm text-gray-500">Genres</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">4.8</h3>
              <p className="mt-1 text-sm text-gray-500">Rating</p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex w-full items-center justify-center px-6 py-10 sm:px-10 lg:w-1/2 xl:px-16">

          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="mb-10">
              <Link
                to="/"
                className="text-3xl font-bold tracking-tight"
              >
                <span className="text-[#e50914]">CINE</span>
                <span className="text-white">FINDER</span>
              </Link>
            </div>

            <h2 className="text-4xl font-semibold text-white">
              Create Account
            </h2>

            <p className="mt-2 text-base text-gray-500">
              Join us and start discovering amazing movies.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#080808] pl-14 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#e50914]/60"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#080808] pl-14 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#e50914]/60"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#080808] pl-14 pr-14 text-white outline-none transition placeholder:text-gray-600 focus:border-[#e50914]/60"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#080808] pl-14 pr-14 text-white outline-none transition placeholder:text-gray-600 focus:border-[#e50914]/60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* TERMS */}
              <div>
                <div className="flex items-start gap-3 pt-1">

                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 accent-[#e50914]"
                  />

                  <p className="text-sm leading-5 text-gray-500">
                    I agree to the{" "}
                    <Link
                      to="#"
                      className="text-gray-300 transition hover:text-[#e50914]"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="#"
                      className="text-gray-300 transition hover:text-[#e50914]"
                    >
                      Privacy Policy
                    </Link>
                  </p>

                </div>

                {errors.terms && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* SIGNUP BUTTON */}
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-[#e50914] text-base font-semibold text-white transition hover:bg-red-700 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]"
              >
                Create Account
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;