"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      
     
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Weather</Link>
      </div>

      {/* Right */}
      <div className="flex gap-4 items-center">
        <ThemeToggle />

        <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">
          Login
        </Link>

        <Link href="/signup" className="bg-green-500 px-3 py-1 rounded">
          Signup
        </Link>

        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
}
