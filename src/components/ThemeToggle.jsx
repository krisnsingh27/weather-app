"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-300 dark:bg-gray-700 p-2 rounded cursor-pointer"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
