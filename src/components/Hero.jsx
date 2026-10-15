import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bone dark:bg-ink"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid -z-20 opacity-60" />

      {/* Animated gradient blob */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-animated-gradient opacity-30 blur-3xl -z-10"
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] dark:opacity-[0.12] pointer-events-none -z-10 mix-blend-overlay" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative text-center px-6 max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border-2 border-ink dark:border-bone rounded-full text-xs font-mono uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          Available for work — 2025
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
        >
          <span className="block">Make it</span>
          <span className="block bg-clip-text text-transparent bg-animated-gradient">
            unforgettable.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-ink/70 dark:text-bone/70 font-mono"
        >
          {'>'} A landing page that refuses to be ordinary.
          <br />
          {'>'} Built with React + Framer Motion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#features"
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ x: 6, y: 6 }}
            className="px-8 py-4 bg-acid text-ink font-bold uppercase tracking-wider text-sm border-2 border-ink shadow-brutal hover:shadow-none transition-all"
          >
            Explore ↓
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ x: 6, y: 6 }}
            className="px-8 py-4 bg-cyan text-ink font-bold uppercase tracking-wider text-sm border-2 border-ink shadow-brutal hover:shadow-none transition-all"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 border-y-2 border-ink dark:border-bone bg-acid text-ink overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 font-mono uppercase text-sm font-bold">
              <span>★ Design</span>
              <span>◆ Motion</span>
              <span>✦ Performance</span>
              <span>● Interaction</span>
              <span>★ Responsive</span>
              <span>◆ Animated</span>
              <span>✦ Unique</span>
              <span>● Crafted</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}