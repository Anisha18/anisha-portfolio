import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function Divider() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
        <span className="text-xs" style={{ color: "var(--bg-border)" }}>✦</span>
        <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const resolved = stored ?? "dark";
    setTheme(resolved);
    document.documentElement.classList.toggle("light", resolved === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}

export default App;
