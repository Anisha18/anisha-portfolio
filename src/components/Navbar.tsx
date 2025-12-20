type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800">
      <span className="text-xl font-semibold">Anisha</span>

      <button
        onClick={toggleTheme}
        className="rounded-full border px-4 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
