import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark') || 
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(
              section.charAt(0).toUpperCase() + section.slice(1)
            );
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg shadow-black/5">
        {navItems.map((item) => {
          const isActive = activeSection === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveSection(item.name);
              }}
              className={cn(
                "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                isActive 
                  ? "text-white dark:text-black" 
                  : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}
      </div>

      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </motion.nav>
  );
}
