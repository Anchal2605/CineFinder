import { useState, useEffect } from "react";
import { User, Mail, Lock, KeyRound, CheckCircle, AlertCircle, Save, ShieldCheck } from "lucide-react";
import { getCurrentUser, updateUserProfile, updateUserPassword } from "../services/api";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileLoading, setProfileLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [profileMessage, setProfileMessage] = useState({ type: "", text: "" });
  const [passwordMessage, setPasswordMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    // Load current user profile from localStorage or API
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setProfile({
        name: savedUser.name || "",
        email: savedUser.email || "",
      });
    }

    // Fetch fresh user data from MySQL backend
    getCurrentUser()
      .then((data) => {
        if (data.user) {
          setProfile({
            name: data.user.name || "",
            email: data.user.email || "",
          });
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      })
      .catch((err) => console.log("Fetching user profile:", err));
  }, []);

  // Handle Profile Submit
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMessage({ type: "", text: "" });

    if (!profile.name.trim()) {
      setProfileMessage({ type: "error", text: "Name cannot be empty." });
      return;
    }
    if (!profile.email.trim() || !/\S+@\S+\.\S+/.test(profile.email)) {
      setProfileMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setProfileLoading(true);
    try {
      const data = await updateUserProfile(profile.name, profile.email);
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      setProfileMessage({ type: "success", text: "Profile details updated successfully!" });
    } catch (err) {
      const errMsg = err.response?.data?.error || "Failed to update profile. Please try again.";
      setProfileMessage({ type: "error", text: errMsg });
    } finally {
      setProfileLoading(false);
    }
  };

  // Handle Password Submit
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordMessage({ type: "", text: "" });

    if (!passwordData.currentPassword) {
      setPasswordMessage({ type: "error", text: "Please enter your current password." });
      return;
    }
    if (!passwordData.newPassword || passwordData.newPassword.length < 8) {
      setPasswordMessage({ type: "error", text: "New password must be at least 8 characters long." });
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage({ type: "error", text: "New passwords do not match." });
      return;
    }

    setPasswordLoading(true);
    try {
      await updateUserPassword(passwordData.currentPassword, passwordData.newPassword);
      setPasswordMessage({ type: "success", text: "Password changed successfully!" });
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      const errMsg = err.response?.data?.error || "Failed to update password. Please try again.";
      setPasswordMessage({ type: "error", text: errMsg });
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      {/* Title Header */}
      <div className="mb-8 border-b border-white/10 pb-5">
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
        <p className="mt-1 text-sm text-gray-400">
          Manage your account profile, email address, and security details.
        </p>
      </div>

      <div className="space-y-8">
        {/* ================= PROFILE SETTINGS ================= */}
        <div className="rounded-2xl border border-white/10 bg-[#212126] p-6 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ef3030]/10 text-[#ef3030]">
              <User size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Profile Information</h2>
              <p className="text-xs text-gray-400">Update your account name and email address.</p>
            </div>
          </div>

          {profileMessage.text && (
            <div
              className={`mb-6 flex items-center gap-3 rounded-lg p-4 text-sm ${
                profileMessage.type === "success"
                  ? "border border-green-500/30 bg-green-500/10 text-green-400"
                  : "border border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {profileMessage.type === "success" ? (
                <CheckCircle size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span>{profileMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleProfileSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#17171b] pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ef3030]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#17171b] pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ef3030]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={profileLoading}
                className="flex items-center gap-2 rounded-xl bg-[#ef3030] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                <Save size={16} />
                {profileLoading ? "Saving Profile..." : "Save Profile Details"}
              </button>
            </div>
          </form>
        </div>

        {/* ================= SECURITY & LOGIN DETAILS ================= */}
        <div className="rounded-2xl border border-white/10 bg-[#212126] p-6 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
              <KeyRound size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Login & Security</h2>
              <p className="text-xs text-gray-400">Change your password to keep your account secure.</p>
            </div>
          </div>

          {passwordMessage.text && (
            <div
              className={`mb-6 flex items-center gap-3 rounded-lg p-4 text-sm ${
                passwordMessage.type === "success"
                  ? "border border-green-500/30 bg-green-500/10 text-green-400"
                  : "border border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {passwordMessage.type === "success" ? (
                <CheckCircle size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span>{passwordMessage.text}</span>
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            {/* Current Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Current Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  placeholder="Enter current password"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#17171b] pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ef3030]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* New Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">New Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    placeholder="At least 8 characters"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#17171b] pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ef3030]"
                  />
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Confirm New Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    placeholder="Repeat new password"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#17171b] pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#ef3030]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={passwordLoading}
                className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:opacity-50"
              >
                <ShieldCheck size={16} />
                {passwordLoading ? "Updating Password..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
