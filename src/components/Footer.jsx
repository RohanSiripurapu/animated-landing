import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink dark:border-bone mt-12 bg-ink text-bone dark:bg-bone dark:text-ink">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold font-mono mb-3">
            <span className="text-acid">▲</span> ANIMATE<span className="text-magenta">.</span>
          </h3>
          <p className="text-sm opacity-60 font-mono mb-4">
            Scroll-stopping experiences, built with care.
          </p>
          <div className="flex gap-4 opacity-70">
            {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-acid transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-acid mb-3">
              {title}
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              {items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-acid transition-colors font-mono">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-bone/20 dark:border-ink/20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between text-xs font-mono opacity-60 gap-2">
          <p>© {new Date().getFullYear()} ANIMATE — all rights reserved</p>
          <p>built with react + framer motion</p>
        </div>
      </div>
    </footer>
  );
}