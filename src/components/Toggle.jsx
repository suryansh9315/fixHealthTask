"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme == "dark" ? (
        <div className="p-3 bg-orange-400 rounded-full cursor-pointer">
          <Sun size={16} color="white" />
        </div>
      ) : (
        <div className="p-3 bg-black rounded-full cursor-pointer">
          <Moon color="white" size={16} />
        </div>
      )}
    </div>
  );
};

export default Toggle;
