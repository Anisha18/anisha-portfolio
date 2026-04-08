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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Small delay so the menu closes before scroll jump
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled || menuOpen ? "var(--bg-surface)" : "transparent",
          borderBottomColor: scrolled || menuOpen ? "var(--bg-border)" : "transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
        className="sticky top-0 z-40 flex items-center justify-between border-b px-6 py-3 md:px-12"
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-medium tracking-widest"
          style={{ color: "var(--green)" }}
          onClick={() => setMenuOpen(false)}
        >
          <span style={{ color: "var(--text-dim)" }}>~/</span>
          anisha
          <span className="cursor-blink" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={href}
                  className="text-xs tracking-widest transition-colors duration-200"
                  style={{ color: isActive ? "var(--green)" : "var(--text-dim)" }}
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

        {/* Right side — theme toggle + hamburger */}
        <div className="flex items-center gap-3">
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex md:hidden flex-col justify-center gap-1.5 p-1"
          >
            <span
              className="block h-px w-5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: "var(--green)",
                transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-300"
              style={{
                backgroundColor: "var(--green)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: "var(--green)",
                transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-30 flex flex-col md:hidden transition-opacity duration-300"
        style={{
          backgroundColor: "var(--bg-surface)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          top: "49px", // height of navbar
        }}
      >
        {/* Prompt line */}
        <p
          className="px-8 pt-10 pb-4 text-xs tracking-widest"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--green)" }}>▶</span> navigate
        </p>

        {/* Nav links */}
        <ul className="flex flex-col px-8">
          {NAV_LINKS.map(({ label, href }, i) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li
                key={id}
                style={{
                  borderBottom: "1px solid var(--bg-border)",
                  transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.3s ease ${i * 0.06}s, opacity 0.3s ease ${i * 0.06}s`,
                }}
              >
                <button
                  onClick={() => handleNavClick(href)}
                  className="w-full py-5 text-left text-sm tracking-widest transition-colors duration-150"
                  style={{ color: isActive ? "var(--green)" : "var(--text)" }}
                >
                  <span style={{ color: "var(--text-dim)" }}>./</span>
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Bottom status line */}
        <p
          className="px-8 mt-auto mb-10 text-xs tracking-widest"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--green)" }}>$</span> location = &quot;Melbourne, AU&quot;
        </p>
      </div>
    </>
  );
}
