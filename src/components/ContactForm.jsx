import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Min 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const onChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const inputClass = (field) =>
    `w-full p-4 border-2 bg-white dark:bg-ink outline-none transition-colors font-mono text-sm ${
      errors[field]
        ? 'border-magenta'
        : 'border-ink dark:border-bone focus:border-acid'
    }`;

  return (
    <section id="contact" className="max-w-2xl mx-auto py-24 px-6">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-sm text-acid">05 /</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Say hi
          </h2>
        </div>
        <p className="font-mono text-sm text-ink/60 dark:text-bone/60 mb-12 ml-12">
          // let&apos;s build something
        </p>
      </Reveal>

      <Reveal>
        <form onSubmit={submit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              placeholder="your name"
              value={form.name}
              onChange={onChange('name')}
              className={inputClass('name')}
            />
            {errors.name && <p className="text-magenta text-xs font-mono mt-1">! {errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange('email')}
              className={inputClass('email')}
            />
            {errors.email && <p className="text-magenta text-xs font-mono mt-1">! {errors.email}</p>}
          </div>

          <div>
            <textarea
              rows="5"
              placeholder="your message..."
              value={form.message}
              onChange={onChange('message')}
              className={`${inputClass('message')} resize-none`}
            />
            {errors.message && <p className="text-magenta text-xs font-mono mt-1">! {errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ x: 4, y: 4 }}
            whileTap={{ x: 6, y: 6 }}
            className="w-full py-4 bg-acid text-ink font-bold uppercase tracking-widest text-sm border-2 border-ink shadow-brutal hover:shadow-none transition-all disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send →'}
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-sm text-acid font-mono"
              >
                ✓ message sent — we&apos;ll be in touch
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </Reveal>
    </section>
  );
}