import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './ui/Reveal';

const items = [
  { year: '2022', title: 'Ideation', desc: 'Concept, research, sketches.', color: 'bg-acid' },
  { year: '2023', title: 'Prototype', desc: 'Design system & MVP.', color: 'bg-cyan' },
  { year: '2024', title: 'Launch', desc: 'Public release, 10k users.', color: 'bg-magenta' },
  { year: '2025', title: 'Scale', desc: 'Global expansion.', color: 'bg-acid' },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="timeline" className="max-w-4xl mx-auto py-24 px-6">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-acid">03 /</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Journey
          </h2>
        </div>
        <p className="font-mono text-sm text-ink/60 dark:text-bone/60 mb-16 ml-12">
          // how we got here
        </p>
      </Reveal>

      <div ref={ref} className="relative pl-8 md:pl-0">
        <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-ink/20 dark:bg-bone/20" />

        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-acid"
        />

        {items.map((it, i) => (
          <Reveal
            key={it.year}
            delay={i * 0.15}
            className={`mb-12 relative md:flex md:items-center ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <span
              className={`absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-ink dark:border-bone ${it.color}`}
            />

            <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <span className="font-mono text-sm text-acid">{it.year}</span>
              <h3 className="text-xl font-bold tracking-tight mt-1">{it.title}</h3>
              <p className="text-sm text-ink/60 dark:text-bone/60 mt-1 font-mono">
                {it.desc}
              </p>
            </div>

            <div className="hidden md:block md:w-1/2" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}