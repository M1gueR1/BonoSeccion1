"use client";
import { useEffect, useState } from "react";

export default function ClaroOscuro() {
  const [activarOscuridad, setOscuridad] = useState(false);

  useEffect(() => {
    if (activarOscuridad) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [activarOscuridad]);

  return (
    <div className="flex items-center justify-center min-h-screen">

      <button
        onClick={() => setOscuridad(!activarOscuridad)}
        className="relative w-32 h-16 bg-gray-300 dark:bg-gray-700 rounded-full"
      >
        <div
          className={`
            w-12 h-12
            rounded-full
            flex items-center justify-center
            text-2xl
            bg-white dark:bg-black
            ${activarOscuridad ? "translate-x-16" : ""}
          `}
        >
          {activarOscuridad ? "Oscuro" : "Claro"}
        </div>
      </button>

    </div>
  );
}