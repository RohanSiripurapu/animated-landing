import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Reveal from './ui/Reveal';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, Northwind',
    text: 'Stunning animations, silky smooth. The best landing page template we have ever used.',
  },
  {
    name: 'Mira Kapoor',
    role: 'Product Designer',
    text: 'The attention to detail is unreal. Every scroll feels intentional.',
  },
  {
    name: 'Rohan Desai',
    role: 'Frontend Engineer',
    text: 'Clean code, easy to customize, performance is fantastic. Shipped in a weekend.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="border-y-2 border-ink dark:border-bone py-24 px-6 bg-ink dark:bg-bone text-bone dark:text-ink overflow-hidden relative">
      {/* Neon accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-animated-gradient" />

      <Reveal>
        <div className="flex items-baseline gap-4 mb-4 justify-center">
          <span className="font-mono text-sm text-acid">04 /</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Signal
          </h2>
        </div>
        <p className="font-mono text-sm text-center opacity-60 mb-16">
          // what people say
        </p>
      </Reveal>

      <div className="max-w-3xl mx-auto relative h-64 md:h-56">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              <span className="text-acid">&ldquo;</span>
              {testimonials[index].text}
              <span className="text-acid">&rdquo;</span>
            </p>
            <div className="mt-6 font-mono text-sm">
              <p className="font-bold">— {testimonials[index].name}</p>
              <p className="opacity-60">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Testimonial ${i + 1}`}
            className={`h-2 transition-all duration-300 border border-current ${
              i === index ? 'w-8 bg-acid' : 'w-2 opacity-40 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </section>
  );
}