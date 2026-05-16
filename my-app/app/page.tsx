import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sreeram Sreedhar',
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:py-24 max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-display mb-10">
        Sreeram Sreedhar
      </h1>

      <div className="space-y-5 text-[15px] sm:text-base text-ink/90">
        <p>
          I&apos;m a computer science student at{' '}
          <a href="https://asu.edu" target="_blank" rel="noopener noreferrer">
            Arizona State University
          </a>
          .
        </p>

        <p className="text-ink-dim">Currently, I&apos;m building:</p>

        <ul className="list-disc list-outside pl-5 space-y-2 text-ink/85">
        <li>
            Context Infrastructure for LLMs at{' '}
            <a
              href="https://supermemory.ai/research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supermemory
            </a>
          </li>
          <li>
            Web apps for government agencies and nonprofits at{' '}
            <a
              href="https://smartchallenges.asu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Cloud Innovation Center
            </a>
          </li>
          <li>
            LLM agents for automated web testing at{' '}
            <a
              href="https://projects.engineering.asu.edu/sudokn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Semantic Computing Lab
            </a>
          </li>
        </ul>

        <p className="text-ink-dim">Previously:</p>

        <ul className="list-disc list-outside pl-5 space-y-2 text-ink/85">
          <li>
            Agentic AI research at Dell Technologies — Global Office of the CTO
          </li>
        </ul>
      </div>

      <footer className="mt-16 pt-8 border-t border-ink/10 flex gap-6 text-sm text-ink-dim">
        <a
          href="https://x.com/ssreeram09"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <a href="mailto:ssreedh9@asu.edu">email</a>
        <a
          href="https://github.com/sreedharsreeram"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/sreeram-sreedhar"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </footer>
    </main>
  );
}
