import Counter from './Counter';
import Reveal from './ui/Reveal';

const stats = [
  { end: 12000, suffix: '+', label: 'Users', color: 'text-acid' },
  { end: 98, suffix: '%', label: 'Satisfaction', color: 'text-cyan' },
  { end: 350, suffix: '+', label: 'Projects', color: 'text-magenta' },
  { end: 24, suffix: '/7', label: 'Support', color: 'text-acid' },
];

export default function Stats() {
  return (
    <section className="border-y-2 border-ink dark:border-bone py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className={`text-5xl md:text-6xl font-bold tracking-tighter font-mono ${s.color}`}>
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-ink/60 dark:text-bone/60">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}