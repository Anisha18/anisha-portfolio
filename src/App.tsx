import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
