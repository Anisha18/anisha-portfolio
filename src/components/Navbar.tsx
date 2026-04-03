import { useEffect, useState } from "react";

type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const NAV_LINKS = [
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      for (const { href } of [...NAV_LINKS].reverse()) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "var(--bg-surface)" : "transparent",
        borderBottomColor: scrolled ? "var(--bg-border)" : "transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
      className="sticky top-0 z-40 flex items-center justify-between border-b px-6 py-3 md:px-12"
    >
      {/* Brand */}
      <a
        href="#"
        className="flex items-center gap-2 text-sm font-medium tracking-widest"
        style={{ color: "var(--green)" }}
      >
        <span style={{ color: "var(--text-dim)" }}>~/</span>
        anisha
        <span className="cursor-blink" />
      </a>

      {/* Links */}
      <ul className="hidden items-center gap-6 md:flex">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={href}
                className="text-xs tracking-widest transition-colors duration-200"
                style={{
                  color: isActive ? "var(--green)" : "var(--text-dim)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--green)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = isActive
                    ? "var(--green)"
                    : "var(--text-dim)")
                }
              >
                <span style={{ color: "var(--text-dim)" }}>./</span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="rounded px-3 py-1.5 text-xs tracking-widest transition-all duration-200"
        style={{
          border: "1px solid var(--bg-border)",
          color: "var(--text-dim)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--green-dim)";
          (e.currentTarget as HTMLElement).style.color = "var(--green)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
          (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
        }}
      >
        {theme === "dark" ? "[ light ]" : "[ dark ]"}
      </button>
    </nav>
  );
}
