import { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const links = ['Home', 'Features', 'Timeline', 'Pricing', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-bone/80 dark:bg-ink/80 border-b-2 border-ink dark:border-bone'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold font-mono tracking-tighter">
          <span className="text-acid">▲</span> ANIMATE
          <span className="text-magenta">.</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-mono uppercase tracking-wider hover:text-acid transition-colors relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acid group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 border-2 border-ink dark:border-bone rounded-full hover:bg-acid hover:text-ink transition-colors"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 border-2 border-ink dark:border-bone rounded-full"
            aria-label="Menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 border-t-2 border-ink dark:border-bone bg-bone dark:bg-ink">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono uppercase tracking-wider text-sm hover:text-acid transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}