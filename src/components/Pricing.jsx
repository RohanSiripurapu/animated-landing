import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Reveal from './ui/Reveal';

const plans = [
  {
    name: 'Starter',
    price: 0,
    tagline: 'For personal projects',
    features: ['1 Project', 'Basic Support', 'Community', '1GB Storage'],
  },
  {
    name: 'Pro',
    price: 29,
    tagline: 'For growing teams',
    popular: true,
    features: ['10 Projects', 'Priority Support', 'Analytics', '50GB', 'Custom Domain'],
  },
  {
    name: 'Enterprise',
    price: 99,
    tagline: 'For organizations',
    features: ['Unlimited', '24/7 Support', 'Custom SLA', 'SSO & Audit'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto py-24 px-6">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-acid">02 /</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Pricing
          </h2>
        </div>
        <p className="font-mono text-sm text-ink/60 dark:text-bone/60 mb-16 ml-12">
          // pick your plan
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ x: 4, y: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative p-8 border-2 border-ink dark:border-bone h-full flex flex-col transition-all duration-200 ${
                p.popular
                  ? 'bg-acid text-ink shadow-brutal hover:shadow-none'
                  : 'bg-white dark:bg-ink shadow-[6px_6px_0_0_#C6FF00] hover:shadow-none'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-ink text-acid text-xs font-mono uppercase tracking-widest">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className={`text-xs font-mono mt-1 ${p.popular ? 'text-ink/70' : 'text-ink/50 dark:text-bone/50'}`}>
                {p.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tighter font-mono">
                  ${p.price}
                </span>
                <span className={`text-sm ${p.popular ? 'text-ink/70' : 'text-ink/50 dark:text-bone/50'}`}>
                  /mo
                </span>
              </div>

              <ul className={`mt-8 space-y-3 flex-1 text-sm font-mono ${p.popular ? 'text-ink' : ''}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <FiCheck className="mt-0.5 shrink-0" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 w-full py-3 font-bold uppercase tracking-wider text-sm border-2 transition-colors ${
                  p.popular
                    ? 'border-ink bg-ink text-acid hover:bg-bone hover:text-ink'
                    : 'border-ink dark:border-bone hover:bg-acid hover:text-ink hover:border-ink'
                }`}
              >
                Choose {p.name}
              </motion.button>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}