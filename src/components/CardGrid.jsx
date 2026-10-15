import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import { FiZap, FiFeather, FiSmartphone, FiLock } from 'react-icons/fi';

const cards = [
  { icon: FiZap, title: 'Fast', desc: '60fps animations, zero jank.', color: 'acid' },
  { icon: FiFeather, title: 'Beautiful', desc: 'Obsessive detail, everywhere.', color: 'cyan' },
  { icon: FiSmartphone, title: 'Responsive', desc: 'Flawless on every screen.', color: 'magenta' },
  { icon: FiLock, title: 'Secure', desc: 'Modern best practices baked in.', color: 'acid' },
];

const colorMap = {
  acid: { shadow: 'shadow-brutal-acid', bg: 'bg-acid' },
  cyan: { shadow: 'shadow-brutal-cyan', bg: 'bg-cyan' },
  magenta: { shadow: 'shadow-brutal-magenta', bg: 'bg-magenta' },
};

export default function CardGrid() {
  return (
    <section id="features" className="max-w-6xl mx-auto py-24 px-6">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-acid">01 /</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            What you get
          </h2>
        </div>
        <p className="font-mono text-sm text-ink/60 dark:text-bone/60 mb-16 ml-12">
          // core capabilities
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          const colors = colorMap[c.color];
          return (
            <Reveal key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4, y: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={`group p-6 border-2 border-ink dark:border-bone bg-white dark:bg-ink ${colors.shadow} hover:shadow-none transition-all duration-200 cursor-pointer h-full`}
              >
                <div
                  className={`w-12 h-12 border-2 border-ink flex items-center justify-center mb-4 ${colors.bg} text-ink group-hover:rotate-6 transition-transform`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="text-sm text-ink/60 dark:text-bone/60 mt-2 font-mono">
                  {c.desc}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}